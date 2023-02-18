import { Schema, model } from "mongoose";

export default model(
	"User",
	new Schema({
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		firstName: {
			type: String,
		},
		dateOfBirth: {
			type: Date,
		},
	})
);
