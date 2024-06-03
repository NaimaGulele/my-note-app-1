import { CiSearch } from 'react-icons/ci';
import { IoCloseCircleOutline } from 'react-icons/io5';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs';
import Noteitem from '../components/Noteitem';

const Notes = ({ notes, setNotes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
    setSearchQuery(''); // Clear search query when toggling the search input
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDelete = (id) => {
    const noteToDelete = notes.find(note => note.id === id);
    const confirmMessage = `Are you sure you want to delete the note titled "${noteToDelete.title}"?`;

    if (window.confirm(confirmMessage)) {
      setNotes(notes.filter(note => note.id !== id));
    }
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.details.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && (
          <input
            type="text"
            autoFocus
            placeholder="Keyword..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        )}
        <button className="btn" onClick={handleSearchToggle}>
          {showSearch ? <IoCloseCircleOutline /> : <CiSearch />}
        </button>
      </header>
      <div className="notes__container">
        {/* Rendering Individual notes */}
        {filteredNotes.length > 0 ? (
          filteredNotes.map(note => (
            <Noteitem key={note.id} note={note} onDelete={handleDelete} />
          ))
        ) : (
          <p>No notes found</p>
        )}
      </div>
      <Link to="/create-note" className="btn add__btn">
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;
