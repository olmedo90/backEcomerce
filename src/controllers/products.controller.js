import Product from "../models/product.model.js";

export const getProducts = async(req, res)=>{
    try {
        const products = await Product.find({ user : req.user.id, }).populate("user");
        res.json(products);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}
export const getProductsCategory = async(req, res)=>{
  try {
      const products = await Product.find({ user : req.user.id, category: req.params.id }).populate("user").populate("category");
      res.json(products);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}
export const createProducts = async(req, res)=>{
    try {
        const { detail, price, comment, category} = req.body;
        const newProduct = new Product({
          detail,
          price,
          comment,
          user: req.user.id,
          category,
        });
        await newProduct.save();
        res.json(newProduct);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const getProduct= async(req, res)=>{
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        return res.json(product);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const deleteProducts = async(req, res)=>{
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct)
          return res.status(404).json({ message: "Product not found" });
    
        return res.sendStatus(204);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const updateProducts = async(req, res)=>{
    try {
        const { detail, price, comment} = req.body;
        const productUpdated = await Product.findOneAndUpdate(
          { _id: req.params.id },
          { detail, price, comment},
          { new: true }
        );
        return res.json(productUpdated);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}