'use client'

import { useState } from 'react'
import { useNotes } from '@/contexts/NotesContext'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

export default function NoteForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { addNote } = useNotes()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title && content) {
      addNote({
        title,
        content,
      })
      setTitle('')
      setContent('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
        className="mb-2 w-full"
      />
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note Content"
        className="mb-2 w-full"
      />
      <Button type="submit">Add Note</Button>
    </form>
  )
}