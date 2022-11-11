import { UnauthenticatedError } from "../errors/index.js";
import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Authentication Invalid!");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(payload);
    // req.user = payload;  // Attaching user to request object
    req.user = { userId: payload.userId };
    console.log(req.user);
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication failed");
  }
};

export default auth;
