import express from 'express';
import './config/mongoose';
import productRoutes from "./routes/products.routes";

const app = express();

app.use(express.json());
app.use(productRoutes);

app.listen(5005);
console.log('Server on port', 5005);