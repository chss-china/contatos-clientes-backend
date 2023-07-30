import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errrors";
import jwt from "jsonwebtoken";

export const verifyTokenValidMidd = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.headers.authorization;

  if (!token) {
    throw new AppError("Missing bearer token", 401);
  }

  const tokenBearer = token.split(" ");

  if (tokenBearer.length !== 2 || tokenBearer[0] !== "Bearer") {
    throw new AppError("Invalid bearer token format", 401);
  }

  const tokenValue = tokenBearer[1];

  jwt.verify(tokenValue, process.env.SECRET_KEY!, (err: any, decoded: any) => {
    if (err) {
      throw new AppError(err.message, 401);
    }

    // Adicionar as informações decodificadas do cliente em res.locals
    res.locals.decoded = decoded;

    return next();
  });
};
