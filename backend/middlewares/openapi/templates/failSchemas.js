const baseFailSchema = {
  type: "object",
  properties: {
    status: {
      type: "string",
      example: "fail",
    },
    data: {
      type: "object",
      properties: {},
    },
  },
};
