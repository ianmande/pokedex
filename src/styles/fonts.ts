import { Poppins, Source_Sans_3 } from 'next/font/google';

export const PoppinsFont = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700', '800', '900'],
  variable: '--font-poppins',
});

export const SourceSans3Font = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-source-sans-3',
});
