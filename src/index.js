import express from "express";
import "./config/mongoose";
import cors from "cors";
import morgan from "morgan";
import fileupload from "express-fileupload";
import { PORT } from "./config";
import productRoutes from "./routes/products.routes";
import authRoutes from "./routes/auth.routes";
import userRoutes from './routes/users.routes';


const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});
app.listen(PORT);
console.log("Server on port", PORT);
