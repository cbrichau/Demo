const swaggerUi = require("swagger-ui-express"); // Creates the Swagger UI page from the given definitions.
const swaggerJsdoc = require("swagger-jsdoc"); // Generates OpenAPI definitions from JSDoc comments.

const { articlesSchemas } = require("../../routes/api/articles.js");
const { authenticationSchemas } = require("../../routes/api/authentication.js");
const { usersSchemas } = require("../../routes/api/users.js");

const swaggerDoc = swaggerJsdoc({
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Demo API",
			version: "1.0.0",
		},
		components: {
			schemas: {
				...articlesSchemas,
				...authenticationSchemas,
				...usersSchemas,
			},
			securitySchemes: {
				JWT: {
					name: "Authorization",
					type: "http",
					in: "header",
					scheme: "bearer",
					bearerFormat: "JWT",
				},
			},
		},
		security: [
			{
				JWT: [],
			},
		],
	},
	// Tells Node to use the comments in the /routes/*.js files to generate the documentation.
	apis: ["./routes/api/*.js"],
});

const swaggerOptions = {
	customCssUrl: "../../css/swagger.css",
	swaggerOptions: {
		docExpansion: "none",
	},
};

exports.openapiServe = swaggerUi.serve;
exports.openapiSetup = swaggerUi.setup(swaggerDoc, swaggerOptions);
