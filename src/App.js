import './App.css';
import { useEffect, useState } from 'react';
import { Note } from './Note';
import { getAllNotes } from './Services/Notes/getAllNotes';
import { createNote } from './Services/Notes/createNote';
import { deleteNote } from './Services/Notes/deleteNote';

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllNotes()
      .then(notes => {
        setNotes(notes)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])
  
  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if (!newNote.trim()) return;

    const noteToAddToState = {
      content: newNote,
      date: new Date().toISOString()
    }

    createNote(noteToAddToState).then(note => {
      setNotes(prevNotes => [note, ...prevNotes])
    })

    setNewNote('')
  }

  const handleDelete = (id) => {
    deleteNote(id)
      .then(() => {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id))
      })
      .catch(error => {
        console.error('Error al eliminar nota:', error)
        alert('No se pudo eliminar la nota')
      })
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Mis Notas</h1>
        <p>Organiza tus ideas de forma simple</p>
      </header>

      <main className="app-content">
        <form onSubmit={handleSubmit} className="note-form">
          <input 
            type="text" 
            placeholder='Escribe una nueva nota...' 
            onChange={handleNoteChange} 
            value={newNote} 
            className="note-input"
          />
          <button type="submit" className="note-button">
            Guardar
          </button>
        </form>

        <div className="notes-list">
          {loading ? (
            <p className="loading-text">Cargando notas...</p>
          ) : notes.length === 0 ? (
            <p className="empty-text">No hay notas aún. ¡Agrega una!</p>
          ) : (
            notes.map((note) => (
              <Note 
                key={note.id} 
                {...note} 
                onDelete={handleDelete} 
              />
            ))
          )}
        </div>
      </main>
    </div>
  )
}

export default App;