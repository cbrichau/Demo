import mongoose from "mongoose";

export const connectDatabase = async () => {
	mongoose.set("strictQuery", false);
	mongoose
		.connect(process.env.MONGODB_URL! + process.env.MONGODB_DATABASE_NAME!)
		.then(() => {
			console.log("Database succesfully connected");
		})
		.catch((error) => {
			console.log("Error connecting to the database", error);
		});
};
