import React from 'react';
import { Link } from 'react-router-dom';

const Noteitem = ({ note, onDelete }) => {
  const handleDeleteClick = (e) => {
    e.preventDefault(); // Prevent the link from being followed
    onDelete(note.id);
  };

  return (
    <div className="note-item">
      <Link to={`/edit-note/${note.id}`} className="note">
        <h4>{note.title.length > 50 ? note.title.slice(0, 50) + '...' : note.title}</h4>
        <p>{note.date}</p>
      </Link>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default Noteitem;
