const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* ************************************************** *\
	Sign up
\* ************************************************** */

exports.signUp = async (req, res) => {
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
		return res.status(400).json({ errors: errors });
	}

	email = email.toLowerCase();
	const existingUser = await User.findOne({ email: email }).exec();

	if (existingUser) {
		return res.status(409).json({ errors: ["User already exists"] });
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

exports.signIn = async (req, res) => {
	let { email, password } = req.body;
	let errors = [];

	if (!email || !password) {
		return res.status(400).json({ errors: ["Missing credentials"] });
	}

	email = email.toLowerCase();
	const user = await User.findOne({ email: email }).exec();

	if (!user) {
		return res.status(401).json({ errors: ["Invalid credentials"] });
	}

	const passwordIsValid = await bcrypt.compare(
		req.body.password,
		user.password
	);

	if (!passwordIsValid) {
		return res.status(401).json({ errors: ["Invalid credentials"] });
	}

	const jwtPayload = {
		id: user._id,
		email: user.email,
	};

	const jwtOptions = {
		expiresIn: "2h",
	};

	const token = jwt.sign(jwtPayload, process.env.JWT_SECRET, jwtOptions);

	return res.status(201).json({
		status: "success",
		data: {
			jwt: token,
		},
	});
};
