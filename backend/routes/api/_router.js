const express = require("express");
const router = express.Router();
const {
  openapiServe,
  openapiSetup,
} = require("../../middlewares/openapi/index.js");

router.use("/docs", openapiServe, openapiSetup);

const routes = [
  "articles",
  // "",
];

routes.forEach((route) => {
  router.use("/" + route, require("./" + route + ".js"));
});

module.exports = router;
