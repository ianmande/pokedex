'use client';
import { JwtPayload, decode } from 'jsonwebtoken';
import { AUTH_KEY_NAME } from 'config';
import { removeItemLocal, searchItemLocal } from 'utils/storage';

const validateToken = (token: string) => {
  if (!token) {
    return false;
  }

  const decodedToken = decode(token) as JwtPayload;

  if (!decodedToken || !decodedToken.exp) {
    return false;
  }

  const expirationDate = new Date(decodedToken.exp * 1000);
  const currentDate = new Date();

  const isTokenValid = currentDate < expirationDate;

  if (!isTokenValid) {
    removeItemLocal(AUTH_KEY_NAME);
  }

  return isTokenValid;
};

export const useAuth = () => {
  const token = searchItemLocal(AUTH_KEY_NAME);

  const isAuthenticated = validateToken(token);

  return { isAuthenticated };
};
