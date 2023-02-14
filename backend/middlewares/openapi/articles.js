const Article = require("../../models/Article.js");
const schemaGenerator = require("mongoose-to-swagger");
const successSchemas = require("./templates/successSchemas");
const { failSchema } = require("./templates/failSchema");

exports.articlesSchemas = {
	"Article.Payload": schemaGenerator(Article, { omitFields: ["_id"] }),

	"Article.CreateOne.Response.Success": successSchemas.createOne("article"),

	"Article.ReadAll.Response.Success": successSchemas.readAll(
		"articles",
		schemaGenerator(Article, {})
	),

	"Article.ReadOne.Response.Success": successSchemas.readOne(
		"article",
		schemaGenerator(Article, {})
	),

	"Article.Update.Response.Success": successSchemas.update("article"),

	"Article.Delete.Response.Success": successSchemas.delete(),
	"Article.Delete.Response.Fail.400": failSchema('["Invalid id"]'),
};
