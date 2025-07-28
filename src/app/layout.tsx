import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { NotesProvider } from '@/contexts/NotesContext';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Note App',
  description: 'A simple note-taking application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NotesProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NotesProvider>
      </body>
    </html>
  );
}