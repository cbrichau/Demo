const getBaseSuccessSchema = () => {
	return {
		type: "object",
		properties: {
			status: {
				type: "string",
				example: "success",
			},
			data: {
				type: "object",
				properties: {},
			},
		},
	};
};

export const createOne = (model: string) => {
	let schema = getBaseSuccessSchema();

	schema.properties.data.properties = {
		[model]: {
			type: "object",
			properties: {
				id: {
					type: "string",
					example: "1",
				},
			},
		},
	};

	return schema;
};

export const readAll = (model: string, itemsSchema: object[]) => {
	let schema = getBaseSuccessSchema();

	schema.properties.data.properties = {
		[model]: {
			type: "array",
			items: itemsSchema,
		},
	};

	return schema;
};

export const readOne = (model: string, itemSchema: object) => {
	let schema = getBaseSuccessSchema();

	schema.properties.data.properties = {
		[model]: itemSchema,
	};

	return schema;
};

export const update = (model: string) => {
	let schema = getBaseSuccessSchema();

	schema.properties.data.properties = {
		[model]: {
			type: "object",
			properties: {
				id: {
					type: "string",
					example: "1",
				},
			},
		},
	};

	return schema;
};

export const deleteOne = () => {
	let schema = getBaseSuccessSchema();

	// schema.properties.data.nullable = true;

	return schema;
};
