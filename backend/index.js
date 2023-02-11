require("dotenv").config();
require("./config/database.js").connectDatabase();

const express = require("express");
const cors = require("./middlewares/cors.js");
const bodyParser = require("body-parser");

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

app.use("/", require("./routes/home.js"));
app.use("/api", require("./routes/api/_router.js"));

/* ******************************************** *\
	Listen
\* ******************************************** */

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
