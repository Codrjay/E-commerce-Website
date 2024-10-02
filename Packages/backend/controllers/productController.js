const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  const { name, price, quantity, seller } = req.body;

  const product = new Product({ name, price, quantity, seller });
  await product.save();

  res.json(product);
};

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
