// Node.js backend (server.js)

const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const secretKey = 'yourSecretKey'; // Replace with your own secret key

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: 'Token not provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token expired' });
      } else {
        return res.status(401).json({ message: 'Invalid token' });
      }
    }

    req.user = decoded;
    next();
  });
}

// Login route
app.post('/login', (req, res) => {
  // Assume user authentication logic here
  const user = { id: 1, username: 'john_doe' };

  // Generate JWT token with 1-hour expiry
  const token = jwt.sign(user, secretKey, { expiresIn: '1h' });

  res.json({ token });
});

// Logout route (optional)
app.post('/logout', (req, res) => {
  // Perform any necessary logout operations
  res.json({ message: 'Logout successful' });
});

// Protected route
app.get('/data', verifyToken, (req, res) => {
  res.json({ message: 'Protected data' });
});

app.listen(8080, () => {
  console.log('Server is running on port 3000');
});
