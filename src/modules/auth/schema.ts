import { object, string } from 'zod';

export const signInSchema = object({
  email: string().email({
    message: 'Email must be a valid email address',
  }),
  password: string().min(1, {
    message: 'Password is required',
  }),
});
