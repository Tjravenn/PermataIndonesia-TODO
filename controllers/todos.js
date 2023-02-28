module.exports = class Todo {
  static async createTodo(req, res, next) {
    try {
      
      res.status(200).json({
        status: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async readTodo(req, res, next) {
    try {
      res.status(200).json({
        status: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async updateTodo(req, res, next) {
    try {
      res.status(200).json({
        status: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteTodo(req, res, next) {
    try {
      res.status(200).json({
        status: true,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

