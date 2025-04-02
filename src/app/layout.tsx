import '@/app/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';

// Configure the font with a display strategy
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Curran Advani - Portfolio',
  description: 'A sleek and modern portfolio template for creatives',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
