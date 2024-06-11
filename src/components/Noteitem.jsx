import React from 'react';
import { Link } from 'react-router-dom';


const Noteitem = ({ note }) => {
  const formatReminder = (reminder) => {
    if (!reminder) return '';
    const reminderDate = new Date(reminder);
    const now = new Date();

    if (reminderDate < now) {
      return `Reminder was set for: ${reminderDate.toLocaleString()}`;
    } else {
      return `Reminder set for: ${reminderDate.toLocaleString()}`;
    }
  };

  return (
    <div className="note-item">
      <Link to={`/edit-note/${note.id}`} className="note">
        <h4>{note.title.length > 50 ? note.title.slice(0, 50) + '...' : note.title}</h4>
        <p>{note.date}</p>
        {note.reminder && <p className="reminder">{formatReminder(note.reminder)}</p>}
      </Link>
    </div>
  );
};

export default Noteitem;