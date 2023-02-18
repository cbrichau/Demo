import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/* ************************************************** *\
	Sign up
\* ************************************************** */

export const signUp = async (req: Request, res: Response) => {
	let { email, password, passwordConfirmation } = req.body;
	let errors = [];

	if (!email) {
		errors.push("Missing email");
	}
	if (!password) {
		errors.push("Missing password");
	}
	if (!passwordConfirmation || password !== passwordConfirmation) {
		errors.push("Invalid password confirmation");
	}

	if (errors.length != 0) {
		return res.status(400).json({
			status: "fail",
			data: {
				errors: errors,
			},
		});
	}

	email = email.toLowerCase();
	const existingUser = await User.findOne({ email: email }).exec();

	if (existingUser) {
		return res.status(409).json({
			status: "fail",
			data: {
				errors: ["User already exists"],
			},
		});
	}

	const user = await new User({
		email: email,
		password: await bcrypt.hash(req.body.password, 10),
	}).save();

	return res.status(201).json({
		status: "success",
		data: {
			user: { id: user._id },
		},
	});
};

/* ************************************************** *\
	Sign in
\* ************************************************** */

export const signIn = async (req: Request, res: Response) => {
	let { email, password } = req.body;
	let errors = [];

	if (!email || !password) {
		return res.status(401).json({
			status: "fail",
			data: {
				errors: ["Missing credentials"],
			},
		});
	}

	email = email.toLowerCase();
	const user = await User.findOne({ email: email }).exec();

	if (!user) {
		return res.status(401).json({
			status: "fail",
			data: {
				errors: ["Invalid credentials"],
			},
		});
	}

	const passwordIsValid = await bcrypt.compare(req.body.password, user.password);

	if (!passwordIsValid) {
		return res.status(401).json({
			status: "fail",
			data: {
				errors: ["Invalid credentials"],
			},
		});
	}

	const jwtPayload = {
		id: user._id,
		email: user.email,
	};

	const jwtOptions = {
		expiresIn: "2h",
	};

	const token = jwt.sign(jwtPayload, process.env.JWT_SECRET!, jwtOptions);

	return res.status(201).json({
		status: "success",
		data: {
			jwt: token,
		},
	});
};
