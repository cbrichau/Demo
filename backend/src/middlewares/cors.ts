import cors from "cors";

// const whitelist = [`http://localhost:${process.env.PORT}`];

// const options = {
// 	origin: (origin, callback) => {
// 		if (!origin || whitelist.indexOf(origin) !== -1) {
// 			callback(null, true);
// 		} else {
// 			callback(new Error("Not allowed by CORS"));
// 		}
// 	},
// 	optionsSuccessStatus: 200,
// };

const allowedOrigins = [`http://localhost:${process.env.PORT}`];

const options: cors.CorsOptions = {
	origin: allowedOrigins,
};

export default cors(options);
