import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

// Authentication middleware to check if the user is authenticated
export const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // JWT secret key
    req.user = await User.findById(decoded.userId); // Attach user to the request
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};


export default authMiddleware;