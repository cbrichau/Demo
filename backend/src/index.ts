require("dotenv").config();
require("./config/database").connectDatabase();

import express from "express";
import cors from "./middlewares/cors";
import bodyParser from "body-parser";
import homeRouter from "./routes/home";
import apiRouter from "./routes/api/_router";

/* ******************************************** *\
	Init
\* ******************************************** */

const app = express();

/* ******************************************** *\
	Apply middlewares
\* ******************************************** */

app.use(cors);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

/* ******************************************** *\
	Define routes
\* ******************************************** */

app.use("/", homeRouter);
app.use("/api", apiRouter);

/* ******************************************** *\
	Listen
\* ******************************************** */

app.listen(process.env.PORT, () => {
	console.log(`Server running on http://localhost:${process.env.PORT}`);
});
