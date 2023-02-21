import { Request, Response } from "express";
import { createClient } from "@sanity/client";

export const client = createClient({
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: process.env.SANITY_DATASET,
	useCdn: false, // set to `true` to fetch from edge cache
	apiVersion: "2022-01-12", // use current date (YYYY-MM-DD) to target the latest API version
	// token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

/* ************************************************** *\
	Read
\* ************************************************** */

export const readAll = async (req: Request, res: Response) => {
	const articles = await client.fetch('*[_type == "article"]{_id,title,body}');

	return res.status(200).json({
		status: "success",
		data: {
			articles: articles,
		},
	});
};

export const readOne = async (req: Request, res: Response) => {
	const sanity = {
		query: `*[_type == "article"]{
			title,
			body,
			"comments": *[_type == "comment" && commentTo._ref == $id]{body}
		}`,
		params: { id: req.params.id },
	};

	const article = await client.fetch(sanity.query, sanity.params);

	return res.status(200).json({
		status: "success",
		data: {
			articles: article,
		},
	});
};
