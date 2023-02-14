const successSchemas = require("./templates/successSchemas");
const { failSchema } = require("./templates/failSchema");

exports.authenticationSchemas = {
	"Authentication.SignUp.Response.Success": successSchemas.createOne("user"),

	"Authentication.SignUp.Response.Fail.400": failSchema(
		'["Missing email", "Missing password", "Invalid password confirmation"]'
	),

	"Authentication.SignUp.Response.Fail.409": failSchema(
		'["User already exists"]'
	),

	"Authentication.SignIn.Response.Fail.401": failSchema(
		'["Missing credentials", "Invalid credentials"]'
	),
};
