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

exports.createOne = (datakey) => {
  let schema = getBaseSuccessSchema();

  schema.properties.data.properties = {
    [datakey]: {
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

exports.readAll = (datakey, itemsSchema) => {
  let schema = getBaseSuccessSchema();

  schema.properties.data.properties = {
    [datakey]: {
      type: "array",
      items: itemsSchema,
    },
  };

  return schema;
};

exports.readOne = (datakey, itemSchema) => {
  let schema = getBaseSuccessSchema();

  schema.properties.data.properties = {
    [datakey]: itemSchema,
  };

  return schema;
};

exports.delete = () => {
  let schema = getBaseSuccessSchema();

  schema.properties.data.nullable = true;

  return schema;
};
