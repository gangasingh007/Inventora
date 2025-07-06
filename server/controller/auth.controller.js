import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { loginSchema, signupSchema } from "../types/auth.types.js";

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

export const register = async (req, res) => {
  try {
    const validated = signupSchema.parse(req.body);
    const existing = await User.findOne({ email: validated.email });

    if (existing) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(validated.password, 10);
    const user = await User.create({
      ...validated,
      password: hashedPassword,
    });

    const token = generateToken(user);
    res.status(201).json({
      user: { username: user.username, email: user.email, role: user.role },
      token,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const validated = loginSchema.parse(req.body);
    const user = await User.findOne({ username: validated.username });

    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(validated.password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(user);
    res.status(200).json({
      user: { username: user.username, email: user.email, role: user.role },
      token,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getMe = async (req, res) => {
  res.status(200).json({
    user: {
      id: req.user._id,
      email: req.user.email,
      username: req.user.username,
      role: req.user.role,
    },
  });
};