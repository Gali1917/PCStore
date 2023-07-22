import { User } from "../models";
import jwt from "jsonwebtoken";
import createError from "http-errors";
import { userSchema } from "../libs/schema.validator";
import { JWT_SECRET } from "../config";
import { signAccessToken } from "../helpers/signAccessToken";

export const singIn = async (req, res, next) => {
  try {
    const result = await userSchema.validateAsync(req.body);

    const userFound = await User.findOne({ email: result.email });
    if (!userFound) throw createError.Unauthorized("El correo no existe");
    const isMatch = await userFound.validPassword(result.password);
    if (!isMatch) throw createError.Unauthorized("Contraseña invalida");

    const token = await signAccessToken(userFound.id);
    res.json({ token });
  } catch (error) {
    if (error.isJoi) error.status = 400;
    next(error);
  }
};

export const singUp = async (req, res, next) => {
  try {
    const result = await userSchema.validateAsync(req.body);
    const userFound = await User.findOne({ email: result.email });
    if (userFound) throw createError.Conflict("El usuario ya existe");
    
    const user = new User({ email: result.email, password: result.password });
    user.password = await user.generateHash(user.password);

    const newUser = await user.save();

    const token = await signAccessToken(newUser.id);

    res.json({token});
  } catch (error) {
    if (error.isJoi) error.status = 400;
    next(error);
  }
};
export const profile = async (req, res) => {
  const user = await User.findOne({ _id: req.userId }).select("-password");
  if (!user) return res.status(401).json({ message: "Usuario no encontrado" });
  res.json(user);
};
