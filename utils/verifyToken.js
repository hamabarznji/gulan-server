const jwt = require('jsonwebtoken');

function verifyToken(token) {
  try {
    // Verify the token and extract the payload
    const payload = jwt.verify(token, 'mbsT');

    // Perform additional checks on the payload if necessary
    // For example, validate expiration time, issuer, or custom claims

    // Return the payload or user information extracted from the token
    return payload;
  } catch (error) {
    // Token verification failed
    // Handle the error or throw an exception
    throw new Error('Invalid token');
  }
}
