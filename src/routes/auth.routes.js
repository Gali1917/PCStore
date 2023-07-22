import { Router } from "express";
import { profile, singIn, singUp } from "../controllers/auth.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = Router();

router.post('/auth/login', singIn);
router.post('/auth/register', singUp);
router.get('/auth/profile', verifyToken, profile);
export default router;