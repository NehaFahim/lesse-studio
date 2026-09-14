import type { Metadata } from 'next';
import { Syne, Plus_Jakarta_Sans, Space_Mono } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lesse Studio - Design & Tech Agency',
  description: 'Minimalist, high-craft design and technology agency website inspired by Lesse Studio, featuring interactive portfolio, services, philosophy, and project inquiry flow.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Lesse Studio - Design & Tech Agency',
    description: 'Minimalist, high-craft design and technology agency website inspired by Lesse Studio, featuring interactive portfolio, services, philosophy, and project inquiry flow.',
    type: 'website',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 675,
        alt: 'Lesse Studio - Design & Tech Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lesse Studio - Design & Tech Agency',
    description: 'Minimalist, high-craft design and technology agency website inspired by Lesse Studio, featuring interactive portfolio, services, philosophy, and project inquiry flow.',
    images: ['/og.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${syne.variable} ${plusJakartaSans.variable} ${spaceMono.variable}`}
    >
      <body className="antialiased selection:bg-neutral-900 selection:text-neutral-100 dark:selection:bg-neutral-100 dark:selection:text-neutral-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

