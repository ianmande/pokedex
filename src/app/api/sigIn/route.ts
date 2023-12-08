import { createLoginSession, findUserByEmail } from 'modules/auth/service';
import argon2 from 'argon2';
import { response } from 'utils/response';

export async function POST(req: Request) {
  const { password, email } = await req.json();
  const user = await findUserByEmail(email);

  if (!user) {
    return response({ message: 'Credentials invalids' }, 401);
  }

  const isPasswordCorrect = await argon2.verify(user.password, password);

  if (!isPasswordCorrect) {
    return response({ message: 'Credentials invalids' }, 401);
  }

  const token = createLoginSession({ password, email });

  if (!token) {
    return response({ message: 'Invalid request body' }, 400);
  }

  return response({ data: token }, 200);
}
