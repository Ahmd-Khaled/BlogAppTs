import jwt from "jsonwebtoken";

export const generateToken = (payload: jwt.JwtPayload, secret: jwt.Secret, options: jwt.SignOptions): string => {
  const token = jwt.sign(payload, secret, options);
  return token;
}

export const verifyToken = (token: string, secret: jwt.Secret): jwt.JwtPayload => {
  return jwt.verify(token, secret) as jwt.JwtPayload;
}