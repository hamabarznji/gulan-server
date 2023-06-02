import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).send("Unauthorized");
  const token = authorization.split(" ")[1];
  try {
    jwt.verify(token, "mbsT");
    next();
  } catch (error) {
    res.status(401).send("Unauthorized");
  }
};

export default verifyToken;
