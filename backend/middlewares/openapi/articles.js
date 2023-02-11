const Article = require("../../models/Article.js");
const schemaGenerator = require("mongoose-to-swagger");
const successSchemas = require("./templates/successSchemas");

exports.articlesSchemas = {
  "Payload.Article": schemaGenerator(Article, { omitFields: ["_id"] }),

  "Response.Success.CreateOne.Article": successSchemas.createOne("article"),

  "Response.Success.ReadAll.Article": successSchemas.readAll(
    "articles",
    schemaGenerator(Article, {})
  ),

  "Response.Success.ReadOne.Article": successSchemas.readOne(
    "article",
    schemaGenerator(Article, {})
  ),

  "Response.Success.Delete.Article": successSchemas.delete(),
};
