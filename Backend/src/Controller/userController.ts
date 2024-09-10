import { Request, Response } from "express";
import User from "../models/User";

// Extending the Request interface to include userId
interface AuthenticatedRequest extends Request {
  userId?: string;
}

const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      return res.status(200).send({ message: "User already exists" });
    }

    const newUser = new User(req.body);
    await newUser.save();
    return res.status(201).send(newUser.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user" });
  }
};

const updateCurrentUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { name, Address, Country, city } = req.body;
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Update the user fields
    user.name = name;
    user.Address = Address;
    user.Country = Country;
    user.city = city;

    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error updating user",
    });
  }
};

export default {
  createCurrentUser,
  updateCurrentUser,
};
