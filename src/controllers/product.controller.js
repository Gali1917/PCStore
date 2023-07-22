import Product from "../models/Product";
import { uploadImage } from "../helpers/cloudinary";

export const getProducts = async (req, res) => {
  const product = await Product.find();
  res.json(product);
};

export const createProducts = async (req, res, next) => {
  try {
    const { name, price, description, quantity } = req.body;
    const result = await uploadImage(req.files.image.tempFilePath);
    const newProduct = new Product({
      name,
      price,
      description,
      quantity,
      image: { 
        url: result.secure_url, 
      },
    });

    await newProduct.save();


    res.json(newProduct);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getProduct = (req, res) => {
  res.json("get product");
};

export const updateProducts = (req, res) => {
  res.json("update products");
};

export const deleteProducts = (req, res) => {
  res.json("delete products");
};
