# Getting started

- Install the packages with `npm install`.
- Launch the app with `npm run backend`.
- View the endpoints at http://localhost:5000/api/docs/.
- Test the app with `npm test` or `jest`.

# Tech stack

- Core: Node.js, Express.js, MongoDB.
- OpenAPI documentation with [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express), [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc), and [mongoose-to-swagger](https://github.com/giddyinc/mongoose-to-swagger).
- API responses follow the [JSend](https://github.com/omniti-labs/jsend) format.
- JWT authentication with [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) and [bcrypt](https://github.com/kelektiv/node.bcrypt.js).
- Testing with [jest](https://github.com/facebook/jest) and [supertest](https://github.com/ladjs/supertest).
