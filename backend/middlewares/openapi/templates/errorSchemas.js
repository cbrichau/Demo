const baseErrorSchema = {
  type: "object",
  properties: {
    status: {
      type: "string",
      example: "error",
    },
    message: {
      type: "string",
      example: "",
    },
  },
};
