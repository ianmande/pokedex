/**
 * The API token.
 * @type {string}
 */
export const TOKEN_API: string = process.env.API_TOKEN || '';

/**
 * The host of the application.
 * @type {string | undefined}
 */
export const APP_HOST = process.env.NEXT_PUBLIC_APP_HOST;

/**
 * The path to the users database.
 * @type {string}
 */
export const USERS_DB_PATH = 'src/db/user.json';

/**
 * The name of the authentication key.
 * @type {string}
 */
export const AUTH_KEY_NAME = 'auth';

export const POKE_API = 'https://pokeapi.co/api/v2';
