const Product = require("./product.model");

const productsCtrl = {};

productsCtrl.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    return next(error);
  }
};

productsCtrl.getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById();
    if (product) return res.status(200).json(product);
    else return res.status(404).json("Producto no encontrado");
  } catch (error) {
    return next(error);
  }
};
// Esto es editar
productsCtrl.editProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.json({ status: "Succes updated" });
  } catch (error) {
    return next(error);
  }
};
// Esto es crear (Solo para el admin)
productsCtrl.createProduct = async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);
    const createProduct = await newProduct.save();

    return res.send({ message: "Product saved succesfully" });
  } catch (error) {
    return next(error);
  }
};

productsCtrl.deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const dltProduct = await Product.findByIdAndDelete(id);
    return res.status(200).json(dltProduct);
  } catch (error) {
    return next(error);
  }
};

module.exports = productsCtrl;
