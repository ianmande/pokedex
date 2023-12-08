export const TOKEN_API = process.env.API_TOKEN || '';

export const APP_HOST = `${process.env.APP_HOST}:${TOKEN_API}`;

export const USERS_DB_PATH = 'src/db/user.json';
