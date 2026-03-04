import './App.css';
import {useState} from 'react';
import {Note} from './Note';

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  
  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    console.log(noteToAddToState)
    // setNotes(notes.concat(noteToAddToState))
    // setNewNote('')
    setNotes([...notes, noteToAddToState])
    setNewNote('')
  }

  const handleShowAll = () => {
    setShowAll(() => !showAll)
  }

  return (
    <div>
      <h1>Notas</h1>
      <button onClick={handleShowAll}> {showAll ? 'Mostrar importantes' : 'Mostrar todas'} </button>
      {/* {notes.map(note => <Note key={note.id} id={note.id} content={note.content} date={note.date} />)} */}
      {notes
        .filter((note => {
          if (showAll === true) return true
            return note.important === true
          }))
        .map((note => (
          <Note key={note.id} {...note} />
        )
      ))}

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Escribe una nueva nota' onChange={handleNoteChange} value={newNote}  />
        <button>Guardar</button>
      </form>
    </div>
  )
}

export default App;
