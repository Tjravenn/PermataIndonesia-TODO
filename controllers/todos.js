const TodoModel = require('../models/todo');

module.exports = class Todo {
  static async createTodo(req, res, next) {
    try {
      // validasi todo
      if (!req.body.title) throw new Error('Title required');
      if (req.body.title.length < 5) throw new Error('Title min 6 length');
      if (req.body.title.length > 100) throw new Error('Title max 100 length');

      // cek unique judul todo
      const todo = await TodoModel.findOne({
        title: req.body.title,
      });

      if (todo) throw new Error('Title already exist');

      // create todo
      const result = await TodoModel.create({
        title: req.body.title,
        status: 0,
        categoryId: req.body.categoryId,
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

  static async readTodo(req, res, next) {
    try {
      const todos = await TodoModel.find();
      res.json({
        status: true,
        todos,
      });
    } catch (error) {
      res.json({
        status: false,
        error: error.message,
      });
      console.log(error);
    }
  }

  static async updateTodo(req, res, next) {
    try {
      // validasi todo
      if (!req.body.title) throw new Error('Title required');
      if (req.body.title.length < 5) throw new Error('Title min 6 length');
      if (req.body.title.length > 100) throw new Error('Titlt max length 100');

      // cek unique judul todo
      const todo = await TodoModel.findOne({
        title: req.body.title,
      });

      if (todo) throw new Error('TItle already exist');

      // upodate todo
      const result = await TodoModel.findByIdAndUpdate({ _id: req.params.id }, {
        title: req.body.title, categoryId: req.body.categoryId
      },
        { new: true }
      );

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

  static async statusTodo(req, res, next) {
    try {
      // validasi
      if (!req.body.status) throw new Error('Status required');
      if (req.body.status > 1) throw new Error('Invalid request');

      // update status
      const result = await TodoModel.findByIdAndUpdate({ _id: req.params.id }, {
        status: req.body.status,
      },
        { new: true }
      );

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

  static async deleteTodo(req, res, next) {
    try {
      await TodoModel.deleteOne({ _id: req.params.id });

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

