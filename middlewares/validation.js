const validation = (schema, property) => {
  return (req, res, next) => {
    const validationResult = schema.validate(req[property]);

    if (validationResult.error) {
      return res.status(400).json({ message: validationResult.error.message });
    }

    next();
  };
};

module.exports = validation;
