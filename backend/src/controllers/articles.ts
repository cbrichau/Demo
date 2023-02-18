import { Request, Response } from "express";
import Article from "../models/Article";

/* ************************************************** *\
	Create
\* ************************************************** */

export const createOne = async (req: Request, res: Response) => {
	const article = await new Article(req.body).save();

	return res.status(201).json({
		status: "success",
		data: {
			article: { id: article._id },
		},
	});
};

/* ************************************************** *\
	Read
\* ************************************************** */

export const readAll = async (req: Request, res: Response) => {
	const where = {};
	// if (req.query.property !== undefined)
	// {
	// 	where.property = req.query.property;
	// }

	const articles = await Article.find(where).exec();

	return res.status(200).json({
		status: "success",
		data: {
			articles: articles,
		},
	});
};

export const readOne = async (req: Request, res: Response) => {
	const article = await Article.findById(req.params.id).exec();

	return res.status(200).json({
		status: "success",
		data: {
			article: article,
		},
	});
};

/* ************************************************** *\
	Update
\* ************************************************** */

export const updateOne = async (req: Request, res: Response) => {
	const article = await Article.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });

	return res.status(200).json({
		status: "success",
		data: {
			article: { id: article?._id },
		},
	});
};

/* ************************************************** *\
	Delete
\* ************************************************** */

export const deleteOne = async (req: Request, res: Response) => {
	const response = await Article.remove({
		_id: req.params.id,
	});

	if (response.deletedCount === 0) {
		return res.status(400).json({
			status: "fail",
			data: {
				errors: ["Invalid id"],
			},
		});
	}

	return res.status(200).json({
		status: "success",
		data: null,
	});
};
