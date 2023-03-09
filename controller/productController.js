import Product from "../models/productModel.js";

export const getAllProduct = async (req, res) => {
  try {
    const product = await Product.findAll();
    res.json(product);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getProductByProductId = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(product);
  } catch (error) {
    res.json({ message: error.message });
  }
};
