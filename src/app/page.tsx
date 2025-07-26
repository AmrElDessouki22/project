import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import NoteList from '@/components/features/NoteList'
import NoteForm from '@/components/features/NoteForm'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-6">
        <NoteForm />
        <NoteList />
      </main>
      <Footer />
    </div>
  )
}