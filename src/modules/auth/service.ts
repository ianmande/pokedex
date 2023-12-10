import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

import { signInSchema } from './schema';
import { TOKEN_API } from 'config';

import { TUser } from 'type/auth';
import { readDB, writeDB } from 'utils/db';

export function createLoginSession({ password, email }: TUser) {
  if (!signInSchema.parse({ password, email })) {
    return null;
  }

  const token = jwt.sign({ password, email }, TOKEN_API, {
    expiresIn: '1h',
  });

  return token;
}

export async function findUserByEmail(email: string) {
  const userDB = await readDB();

  const user = userDB.users.find((user: TUser) => user.email === email);

  return user;
}

/**
 * Creates a new user with the provided email and password.
 * @param {TUser} user - The user object containing the email and password.
 * @returns {Promise<Object>} - The newly created user object.
 */
export async function createUser({ email, password }: TUser) {
  const passHashed = await argon2.hash(password);

  const newUser = { email, password: passHashed };

  let userDB = await readDB();

  userDB.users.push(newUser);

  writeDB(userDB);

  return newUser;
}
