import fs from 'fs';
import { USERS_DB_PATH } from 'config';
import { TUserDB } from 'type/auth';
import path from 'path';

const filePath = path.join(process.cwd(), USERS_DB_PATH);

/**
 * Reads the database json and returns the parsed data.
 * @returns A promise that resolves to the parsed data from the database file.
 */
export const readDB = async (): Promise<TUserDB> => {
  const data = fs.readFileSync(filePath);

  return await JSON.parse(data.toString());
};

export const writeDB = (data: TUserDB) => {
  return fs.writeFileSync(filePath, JSON.stringify(data));
};
