import type { Metadata } from 'next';
import { Space_Grotesk, Instrument_Serif } from 'next/font/google';
import './globals.css';
import StoreProvider from '@/lib/StoreProvider';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mrinal Satyarthi — Software Engineer',
  description:
    'Software engineer at Judix, building AI systems that answer legal questions from real Supreme Court judgments — plus the cloud infrastructure that keeps them up.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}

