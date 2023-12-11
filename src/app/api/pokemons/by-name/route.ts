import { POKE_API } from 'config';
import { NextRequest } from 'next/server';
import { response } from 'utils/response';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  let name = searchParams.get('name');

  if (!name) {
    return response({ message: 'Invalid request' }, 400);
  }

  const data = await fetch(`${POKE_API}/pokemon/${name}`, {
    next: { revalidate: 3600 },
  });

  const pokemonsDetails = await data.json();

  return response(
    {
      message: 'success',
      data: pokemonsDetails,
    },
    200
  );
}
