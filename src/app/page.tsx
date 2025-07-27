'use client'

import { useState } from 'react';
import NotesList from '@/components/features/NotesList';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Notes</h1>
      <NotesList />
    </div>
  );
};

export default HomePage;
