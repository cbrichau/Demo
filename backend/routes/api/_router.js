const express = require("express");
const router = express.Router();
const {
	openapiServe,
	openapiSetup,
} = require("../../middlewares/openapi/index.js");

router.use("/docs", openapiServe, openapiSetup);

const paths = ["articles", "authentication", "users"];

paths.forEach((path) => {
	const route = require("./" + path + ".js").router;
	router.use("/" + path, route);
});

module.exports = router;
