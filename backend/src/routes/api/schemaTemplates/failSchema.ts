export const withErrors = (errorsExample: string) => {
	return {
		type: "object",
		properties: {
			status: {
				type: "string",
				example: "fail",
			},
			data: {
				type: "object",
				properties: {
					errors: {
						type: "array",
						items: {
							type: "string",
						},
						example: errorsExample,
					},
				},
			},
		},
	};
};
