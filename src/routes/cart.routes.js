import { Router } from "express";
const router = Router();

router.get('/cart');
router.post('/cart');
router.get('/cart/:id');
router.put('/cart/:id');
router.delete('/cart/:id');

export default router;