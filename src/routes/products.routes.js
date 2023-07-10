import { Router } from "express";
import { 
    getProducts,
    getProduct,
    createProducts,
    updateProducts,
    deleteProducts
 } from "../controllers/product.controller";
const router = Router();

router.get('/products', getProducts);
router.post('/products', createProducts);
router.get('/products/:id', getProduct);
router.put('/products/:id', updateProducts);
router.delete('/products/:id', deleteProducts);


export default router;