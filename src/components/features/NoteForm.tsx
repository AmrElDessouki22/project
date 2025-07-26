'use client'

import { useState } from 'react'
import { useNotes } from '@/contexts/NotesContext'
import Button from '@/components/ui/Button'

export default function NoteForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { addNote } = useNotes()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addNote({
      title,
      content,
    })
    setTitle('')
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <input 
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
        className="w-full mb-4 p-2 border rounded"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note Content"
        className="w-full mb-4 p-2 border rounded"
        required
        rows={4}
      />
      <Button type="submit" variant="primary">Add Note</Button>
    </form>
  )
}