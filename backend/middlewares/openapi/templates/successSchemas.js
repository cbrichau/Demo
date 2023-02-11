getBaseSuccessSchema = () => {
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

exports.createOne = (model) => {
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

exports.readAll = (model, itemsSchema) => {
  let schema = getBaseSuccessSchema();

  schema.properties.data.properties = {
    [model]: {
      type: "array",
      items: itemsSchema,
    },
  };

  return schema;
};

exports.readOne = (model, itemSchema) => {
  let schema = getBaseSuccessSchema();

  schema.properties.data.properties = {
    [model]: itemSchema,
  };

  return schema;
};

exports.update = (model) => {
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

exports.delete = () => {
  let schema = getBaseSuccessSchema();

  schema.properties.data.nullable = true;

  return schema;
};
