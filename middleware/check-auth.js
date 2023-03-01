const { verifyToken } = require('../helpers/jwt');
const UserModel = require('../models/user');

// verify token

module.exports = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) throw new Error('Unauthenticated');
    const payload = verifyToken(access_token, process.env.SECRET_KEY);
    const user = await UserModel.findById(payload.id);
    if (!user) throw new Error('Unauthenticated');
    req.user = {
      id: user.id,
      username: user.username,
    };
    next();
  } catch (error) {
    res.json({
      status: false,
      error: error.message || 'Unauthenticated',
    });
  }
}