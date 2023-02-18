import swaggerUi from "swagger-ui-express"; // Creates the Swagger UI page from the given definitions.
import swaggerJsdoc from "swagger-jsdoc"; // Generates OpenAPI definitions from JSDoc comments.

import articles from "../routes/api/articles";
import authentication from "../routes/api/authentication";
import users from "../routes/api/users";

const swaggerDoc = swaggerJsdoc({
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Demo API",
			version: "1.0.0",
		},
		components: {
			schemas: {
				...articles.schemas,
				...authentication.schemas,
				...users.schemas,
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
	// Tells Node to use the comments in the /routes/*.ts files to generate the documentation.
	apis: ["./src/routes/api/*.ts"],
});

const swaggerOptions = {
	customCssUrl: "../../css/swagger.css",
	swaggerOptions: {
		docExpansion: "none",
	},
};

export const openapiServe = swaggerUi.serve;
export const openapiSetup = swaggerUi.setup(swaggerDoc, swaggerOptions);
