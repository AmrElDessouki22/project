import Header from '@/components/ui/Header'
import Sidebar from '@/components/layout/Sidebar'
import NoteList from '@/components/features/NoteList'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold">My Notes</h1>
          <NoteList />
        </main>
      </div>
    </div>
  )
}