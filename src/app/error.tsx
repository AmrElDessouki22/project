'use client';

import { ReactNode } from 'react';

export default function ErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>Something went wrong!</h1>
      {children}
    </div>
  );
}