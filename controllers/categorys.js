const CategoryModel = require('../models/category');

module.exports = class Category {
  static async createCategory(req, res, next) {
    try {
      // validasi kategori
      if (!req.body.name) throw new Error('Category required');
      if (req.body.name.length < 5) throw new Error('Category min 6 length');
      if (req.body.name.length > 20) throw new Error('Category max 20 length');

      // cek unique nama category
      const category = await CategoryModel.findOne({
        name: req.body.name,
      });

      if (category) throw new Error('Category already exist');

      // create category
      const result = await CategoryModel.create({
        name: req.body.name,
      });

      // respons
      res.json({
        status: true,
        result,
      });
    } catch (error) {
      res.json({
        status: false,
        error: error.message,
      });
      console.log(error);
    }
  }

  static async readCategory(req, res, next) {
    try {
      const categories = await CategoryModel.find();
      res.json({
        status: true,
        categories,
      });
    } catch (error) {
      res.json({
        status: false,
        error: error.message,
      });
      console.log(error);
    }
  }

  static async deleteCategory(req, res, next) {
    try {
      await CategoryModel.deleteOne({ _id: req.params.id });

      res.json({
        status: true,
      });
    } catch (error) {
      res.json({
        status: false,
        error: error.message,
      });
      console.log(error);
    }
  }
}

