import React from 'react';
import '../globals.css';
import { NotesProvider } from '@/contexts/NotesContext';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <NotesProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4">{children}</main>
        <Footer />
      </div>
    </NotesProvider>
  );
};

export default Layout;