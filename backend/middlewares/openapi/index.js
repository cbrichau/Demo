const swaggerUi = require("swagger-ui-express"); // Creates the Swagger UI page from the given definitions.
const swaggerJsdoc = require("swagger-jsdoc"); // Generates OpenAPI definitions from JSDoc comments.

const { articlesSchemas } = require("./articles.js");

const swaggerDoc = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Demo API",
      version: "1.0.0",
    },
    components: {
      schemas: {
        // UserCredentials: schemaGenerator(User, {omitFields: ['_id']}),
        ...articlesSchemas,
        // "Response.Error": getErrorSchema(),
        // "Response.Fail.Create.Article": getFailSchema(),
      },
    },
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
