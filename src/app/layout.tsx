import './styles/globals.css';
import type { Metadata } from 'next';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';

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
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
