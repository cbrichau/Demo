const User = require("../../models/User.js");
const schemaGenerator = require("mongoose-to-swagger");
const successSchemas = require("./templates/successSchemas");
const { failSchema } = require("./templates/failSchema");

exports.usersSchemas = {
	"User.Payload": schemaGenerator(User, { omitFields: ["_id"] }),

	"User.ReadOne.Response.Success": successSchemas.readOne(
		"user",
		schemaGenerator(User, {})
	),

	"User.Update.Response.Success": successSchemas.update("user"),
};
