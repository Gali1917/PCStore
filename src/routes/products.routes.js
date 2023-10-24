import { Router } from "express";
import { 
    getProducts,
    getProduct,
    createProducts,
    updateProducts,
    deleteProducts
 } from "../controllers/product.controller";
const router = Router();

router.get('/', getProducts);
router.post('/', createProducts);
router.get('/:id', getProduct);
router.put('/:id', updateProducts);
router.delete('/:id', deleteProducts);


export default router;