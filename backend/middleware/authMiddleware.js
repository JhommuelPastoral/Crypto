import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
export default async function protectedRoute(req, res, next) {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(!decoded) {
      return res.status(401).json({message: "Token not Unauthorized"});
    }
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "Unauthorized" });
    }
    req.user = user;
    next();
    
  } catch (error) {
  return res.status(403).json({ message: "Unauthorized" });
  }
}