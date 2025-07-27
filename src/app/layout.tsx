import { ReactNode } from 'react';
import '@/app/globals.css';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { NotesProvider } from '@/contexts/NotesContext';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Note App',
  description: 'A comprehensive note-taking application.',
};

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <NotesProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NotesProvider>
      </body>
    </html>
  );
};

export default RootLayout;
