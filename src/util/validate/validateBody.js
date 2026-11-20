const ZodBody = require("zod");
const { AppError } = require("..");
function validateBody() {
  return (req, _res, next) => {
    const result = ZodBody.safeParse(req.body);

    if (!result.success) {
      const message = result.error.issues.map((issue) => issue.message);

      return next(new AppError(400, message));
    }

    req.body = result.data;
    next();
  };
}

module.exports = validateBody;
