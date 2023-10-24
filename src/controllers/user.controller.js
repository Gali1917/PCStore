import { User } from "../models";

export const getUsers = async (req, res, next) => {
  try {
    const result = await User.find().populate([
      {
        path: "products",
      },
    ]);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
