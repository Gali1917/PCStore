import { Router } from "express";
import { profile, singIn, singUp } from "../controllers/auth.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = Router();

router.post('/login', singIn);
router.post('/register', singUp);
router.get('/profile', verifyToken, profile);
export default router;