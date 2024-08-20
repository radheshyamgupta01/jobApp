const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { secretKey,JWT_SECRET } = require('../config/config');  


// Register User
exports.register = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Determine user role based on email domain
    const role = email.endsWith('@alphaware.com') ? 'admin' : 'user';
    
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    const user = new User({
      email,
      password,  
      role
    });
    await user.save();
    const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({
      user: {
        id: user._id,
        email: user.email,
        role: user.role
      },
      token
    });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body; 
  console.log("i m running ",email,password)
  try {

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

