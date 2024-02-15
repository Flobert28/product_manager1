const Product = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(Product => res.json(Product))
        .catch(err => res.json(err));
}

module.exports.findAllProducts = (req, res) => {
  Product.find()
      .then((Products) => {
          res.json({ Products })
      })
      .catch((err) => {
          res.json({ message: 'Something went wrong', error: err })
      });
}