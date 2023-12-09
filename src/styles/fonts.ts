import { Karla, Source_Sans_3 } from 'next/font/google';

export const KarlaFont = Karla({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-karla',
});

export const SourceSans3Font = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-source-sans-3',
});
