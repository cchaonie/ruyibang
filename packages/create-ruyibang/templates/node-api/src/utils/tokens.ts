import jwt from 'jsonwebtoken';

function generateAccessToken(user: any) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '15m' });
}

function generateRefreshToken(user: any) {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET!, { expiresIn: '7d' });
}

export { generateAccessToken, generateRefreshToken };
