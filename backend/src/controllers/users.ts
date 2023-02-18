import { Request, Response } from "express";
import User from "../models/User";

/* ************************************************** *\
	Create
\* ************************************************** */

// N/A, covered by authentication.signUp

/* ************************************************** *\
	Read
\* ************************************************** */

// readAll To do

export const readOne = async (req: Request, res: Response) => {
	const user = await User.findById(req.params.id);
	// user.password = undefined;

	return res.status(200).json({
		status: "success",
		data: {
			user: user,
		},
	});
};

/* ************************************************** *\
	Update
\* ************************************************** */

export const updateOne = async (req: Request, res: Response) => {
	const updateResult = await User.updateOne(
		{ _id: req.params.id },
		{
			$set: {
				firstName: req.body.firstName,
				dateOfBirth: req.body.dateOfBirth,
			},
		}
	);

	console.log(updateResult.acknowledged);
	console.log(updateResult.modifiedCount);
	//ajouter verif de la réponse avant d'envoyer 200

	return res.status(200).json({
		status: "success",
		data: {
			user: req.params.id,
		},
	});
};

/* ************************************************** *\
	Delete
\* ************************************************** */

// To do
