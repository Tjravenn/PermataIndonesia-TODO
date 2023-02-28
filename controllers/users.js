module.exports = class User {
  static async login(req, res, next) {
    try {
      res.status(200).json({
        status: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async register(req, res, next) {
    try {
      res.status(200).json({
        status: true,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

