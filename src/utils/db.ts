import fs from 'fs';
import { USERS_DB_PATH } from 'config';
import { TUserDB } from 'type/auth';
import path from 'path';

const filePath =
  process.env.NODE_ENV === 'development'
    ? path.join(__dirname, USERS_DB_PATH)
    : USERS_DB_PATH;
/**
 * Reads the database json and returns the parsed data.
 * @returns A promise that resolves to the parsed data from the database file.
 */
export const readDB = async (): Promise<TUserDB> => {
  let data;

  data = await fetch(USERS_DB_PATH);

  return await JSON.parse(data.toString());
};

export const writeDB = (data: TUserDB) => {
  return fs.writeFileSync(filePath, JSON.stringify(data));
};
