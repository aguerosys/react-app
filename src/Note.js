import './App.css';

export const Note = ({ content, date, onDelete, id }) => {
  const formattedDate = new Date(date).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  });

  const handleDelete = () => {
    if (window.confirm('¿Estás seguro de que quieres borrar esta nota?')) {
      onDelete(id)
    }
  };

  return (
    <div className="note-card">
      <div className="note-content">{content}</div>
      <div className="note-date">{formattedDate}</div>
      <button 
        className="delete-button" 
        onClick={handleDelete}
        title="Eliminar nota"
      >
        🗑️
      </button>
    </div>
  );
};