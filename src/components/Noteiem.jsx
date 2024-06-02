import React from 'react';
import { Link } from 'react-router-dom';

const Noteitem = ({ note }) => {
  
  return (
    <Link to={`/edit-note/${note.id}`}  className="note">
         <h4>{note.title.length > 50 ? note.title.slice (0, 50) + '...' : note.title}</h4>
         <p>{note.date}</p> {/* Ensure date is used here */}

    </Link>
  )
}

export default Noteitem;