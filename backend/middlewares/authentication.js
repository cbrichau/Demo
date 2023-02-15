const jwt = require("jsonwebtoken");

exports.verifyJWT = (req, res, next) => {
	const token = req.headers.authorization.split(" ")[1];

	if (!token) {
		return res.status(401).json({
			status: "fail",
			data: {
				errors: ["Missing token"],
			},
		});
	}

	try {
		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decodedToken;
	} catch (err) {
		return res.status(401).json({
			status: "fail",
			data: {
				errors: ["Invalid token"],
			},
		});
	}

	return next();
};
