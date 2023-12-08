/**
 * Represents the authentication information.
 */
export type TUser = {
  password: string;
  email: string;
};

export type TUserDB = {
  users: TUser[];
};
