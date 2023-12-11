import { TAuthentication, TUser } from 'type/auth';

import { appService } from 'utils/api';

export const Login = async (data: TUser): Promise<TAuthentication> =>
  await appService.post('sigIn', data, 'no-cache');
