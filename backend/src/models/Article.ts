import { Schema, model } from "mongoose";

export default model(
	"Article",
	new Schema({
		title: {
			type: String,
			required: true,
		},
		published_date: {
			type: Date,
		},
		updated_date: {
			type: Date,
			default: Date.now,
		},
	})
);
