import {
  createLoginSession,
  createUser,
  findUserByEmail,
} from 'modules/auth/service';

import { response } from 'utils/response';

type ResponseData = {
  message?: string;
  data?: {
    token: string;
  };
};

export async function POST(req: Request) {
  const { password, email } = await req.json();

  const existUser = await findUserByEmail(email);

  if (existUser) {
    return response<ResponseData>({ message: 'User already exists' }, 400);
  }

  const newUser = await createUser({ email, password });
  const token = createLoginSession(newUser);

  if (!token) {
    return response<ResponseData>({ message: 'Invalid request body' }, 400);
  }

  return response<ResponseData>({ data: { token } }, 200);
}
