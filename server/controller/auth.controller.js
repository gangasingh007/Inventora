import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !password || !email) {
        return res.status(400).json({
            msg: "All the fields are required"
        });
    }
    try {
        const isExisting = await User.findOne({ username });
        if (isExisting) {
            return res.status(409).json({
                msg: "User Already Exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            password: hashedPassword,
            email
        });

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET,{
            expiresIn : "7d"
        });

        res.status(201).json({
            msg: "User created successfully",
            token,
            user: {
                id : newUser._id,
                username: newUser.username,
                email: newUser.email,
                role: newUser.role
            }
        });

    } catch (error) {
        res.status(500).json({ msg: "Ther Was an error creating the user", error: error.message });
    }
}

export const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(401).json({
            msg: "All the fields are required"
        });
    }
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(403).json({
                msg: "User Doesn't Exist"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                msg: "Invalid credentials"
            });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d"
        });

        return res.status(200).json({
            msg: "User logged in successfully",
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        return res.status(500).json({ msg: "There was an error logging in the user", error: error.message });
    }
}