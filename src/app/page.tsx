import NotesList from '../components/features/NotesList';
import AddNote from '../components/features/AddNote';

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Notes</h1>
      <AddNote />
      <NotesList />
    </div>
  );
}
