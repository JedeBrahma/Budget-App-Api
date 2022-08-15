const validateValues = (req, res, next) => {
    const { name, amount, date, from, category } = req.body;
    if (
      typeof name !== "string" ||
      typeof amount !== "number" ||
      typeof date !== "string" ||
      typeof from !== "string" ||
      typeof category !== "string"
    ) {
      res.status(404).json(name);
    } else {
      next();
    }
  };
  
  module.exports = { validateValues };