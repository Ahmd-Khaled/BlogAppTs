import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "./error-handler.middleware"
import { ObjectSchema } from "joi";


export const validation = (schema: Record<string, ObjectSchema>) => {
  return asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const schemaKeys = Object.keys(schema);

    const validationErrors: { key: string, errors: string[] }[] = []
    for (const key of schemaKeys) {
      const { error } = schema[key].validate(req[key as keyof Request], { abortEarly: false });
      if (error) {
        validationErrors.push({ key, errors: error.details.map((detail) => detail.message) });
      }
    }
    if (validationErrors.length > 0) {
      return res.status(400).json({ message: "Validation Errors", errors: validationErrors });
    }
    next();
  })
}