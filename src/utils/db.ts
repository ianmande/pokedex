import fs from 'fs';
import path from 'path';

import { USERS_DB_PATH } from 'config';

import { TUserDB } from 'type/auth';

import users from '../db/user.json';

const filePath = path.join(__dirname, USERS_DB_PATH);
/**
 * Reads the database json and returns the parsed data.
 * @returns A promise that resolves to the parsed data from the database file.
 */
export const readDB = async (): Promise<TUserDB> => {
  // if (process.env.NODE_ENV === 'development') {
  //   const data = fs.readFileSync(filePath);

  //   return await JSON.parse(data.toString());
  // }

  return users;
};

export const writeDB = (data: TUserDB) => {
  return fs.writeFileSync(filePath, JSON.stringify(data));
};
