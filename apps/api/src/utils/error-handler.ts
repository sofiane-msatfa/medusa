import type { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (res.headersSent) {
    return next(err);
  }

  console.log("typeof err", typeof err);

  if (err instanceof ZodError) {
    console.error("Validation error");
    return res.status(400).json({
      message: "Validation error",
      errors: err.errors.map((error) => error.message),
    });
  }

  res.status(500).json({
    message: "Internal server error",
  });
}
