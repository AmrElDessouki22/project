import { NoteList } from '@/components/features/NoteList';
import { AddNote } from '@/components/features/AddNote';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Notes</h1>
      <AddNote />
      <NoteList />
    </div>
  );
};

export default HomePage;
