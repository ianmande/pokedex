import WithoutAuthentication from 'components/WithoutAuth';
import { Metadata } from 'next';

import 'react-toastify/dist/ReactToastify.css';

import { PoppinsFont } from 'styles/fonts';

import 'styles/globals.css';

export const metadata: Metadata = {
  title: 'Pokedex | Detalles de pokemon',
};

export default function Layout({
  children,
}: {
  params: { name: string };
  children: React.ReactNode;
}) {
  return (
    <body className={PoppinsFont.className}>
      {children}
      <WithoutAuthentication />
    </body>
  );
}
