import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { SECRET_KEY } from "../config/env.js";

export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
      bio,
    } = req;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
      bio,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000)
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
};


export const login = async(req,res) =>{
  try {
      const { email,password } = req.body;

      const user = await User.findOne({ email });
      if(!user){
        return res.status(401).json({msg: "Invalid credentials"})
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(401).json({ msg: "Incorrect Password" });
      }

      const token = jwt.sign({ id: user._id }, SECRET_KEY);
      delete user.password;
      res.status(400).json({ token,user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}