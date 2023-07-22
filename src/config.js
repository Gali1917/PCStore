import { config } from "dotenv";

config();

export const MONGODB = process.env.MONGODB || "";
export const PORT = process.env.PORT || 5005;
export const JWT_SECRET = process.env.JWT_SECRET || "";
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || "";
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || "";
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || "";
