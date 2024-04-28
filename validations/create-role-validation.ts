import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const CreateRoleValidation = [
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .notEmpty()
    .withMessage("Name must not be empty"),
  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array());
    }
    next();
  },
];

export default CreateRoleValidation;
