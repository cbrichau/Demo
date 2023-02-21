require("dotenv").config();
require("./database").connectDatabase();

import express from "express";
import cors from "../middlewares/cors";
import bodyParser from "body-parser";
import homeRouter from "../routes/home";
import apiRouter from "../routes/api/_router";

export const createServer = () => {
	// Initialising the app.
	const app = express();

	// Applying the middlewares.
	app.use(cors);
	app.use(express.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(express.static("public"));

	// Defining the routes.
	app.use("/", homeRouter);
	app.use("/api", apiRouter);

	return app;
};
