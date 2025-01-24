import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jwt-simple';

// Authenticate instructor (login)
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate required fields
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All Fields Are Required! (email, password)"
    });
  }

  try {
    // In userController.js
const user = await User.findOne({ email });
if (!user) {
  return res.status(404).json({ success: false, message: 'User not found' });
}

const validPassword = await bcrypt.compare(password, user.password);
if (!validPassword) {
  return res.status(400).json({ success: false, message: 'Invalid password' });
}

const payload = { id: user._id, role: user.role };  // Ensure role is in the payload
const token = jwt.encode(payload, process.env.JWT_SECRET);
res.status(201).json({ success: true, data: token, role: user.role });  // Send role in response

  } catch (err) {
    console.error("Error in fetching courses: ", err.message);
    res.status(400).json({ success: false, message: err.message });
  }
};
