import Category from "../models/category.model.js";

export const getCategory = async(req, res)=>{
    try {
        const categories = await Category.find({});
        res.json(categories);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const createCategory = async(req, res)=>{
    try {
        const { name} = req.body;
        const newCategory = new Category({
        name
        });
        await newCategory.save();
        res.json(newCategory);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}



export const deleteCategory= async(req, res)=>{
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);
        if (!deletedCategory)
          return res.status(404).json({ message: "Category not found" });
    
        return res.sendStatus(204);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const updateCategory = async(req, res)=>{
    console.log("🚀 ~ updateCategory ~ req.params.id :", req.params.id )

    try {
        const { name} = req.body;
        const category = await Category.findOneAndUpdate(
          { _id: req.params.id },
          { name},
          { new: true }
        );
        return res.json(category);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}