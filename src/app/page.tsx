import { NotesList } from '@/components/features/NotesList';
import AddNote from '@/components/features/AddNote';

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Notes</h1>
      <AddNote />
      <NotesList />
    </div>
  );
}