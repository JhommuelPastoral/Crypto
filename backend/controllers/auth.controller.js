import  User  from "../models/userModel.js";
import jwt from "jsonwebtoken"

export const Login = async(req, res) => {

  try {
    const {name, email, photo} = req.body
    if(!name || !email || !photo){
      return res.status(400).json({message: "All fields are required"})
    }
    const userExists = await User.findOne({email: email})
    if(userExists){
      const token = jwt.sign({id: userExists._id}, process.env.JWT_SECRET, {expiresIn: "7d"});
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 7,
      });
      return res.status(200).json({message: "User already exists"})
    }
    else{
      const user = await User.create({name, email, photo})
      const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "7d"});
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,             
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 7,
      });
      return res.status(200).json({message: "User created successfully"})

    }
    
  } catch (error) {
    console.log("login error", error);
    return res.status(500).json({message: "Something went wrong"})
  }

};

export const logOut = async (req,res) =>{
  res.clearCookie("token",{
    httpOnly: true,
    sameSite: 'none',
    secure: true,
  });

  return res.status(200).json({message: "Logout successful"});
}