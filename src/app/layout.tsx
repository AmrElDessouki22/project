import '@/app/globals.css';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Notes App',
  description: 'A comprehensive notes application.',
};

interface LayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
