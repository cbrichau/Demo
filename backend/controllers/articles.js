const Article = require("../models/Article.js");

/* ************************************************** *\
	Create
\* ************************************************** */

exports.createOne = async (req, res) => {
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

exports.readAll = async (req, res) => {
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

exports.readOne = async (req, res) => {
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

exports.updateOne = async (req, res) => {
	const article = await Article.findOneAndUpdate(
		{ _id: req.params.id },
		{ $set: req.body },
		{ new: true }
	);

	return res.status(200).json({
		status: "success",
		data: {
			article: { id: article._id },
		},
	});
};

/* ************************************************** *\
	Delete
\* ************************************************** */

exports.deleteOne = async (req, res) => {
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
