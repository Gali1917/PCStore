import Product from "../models/Product";

export const getProducts = async (req, res) => {
  const product = await Product.find();
  res.json(product);
};

export const createProducts = async (req, res) => {
  try {
    const { name, price, description, quantity } = req.body;
    const newProduct = new Product({ name, price, description, quantity });
    await newProduct.save();
    res.json(newProduct);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
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
