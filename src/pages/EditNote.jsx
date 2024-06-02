import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useParams, useNavigate } from 'react-router-dom';

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const noteToEdit = notes.find(note => note.id === id);

  useEffect(() => {
    console.log('EditNote component rendered.');
    console.log('notes:', notes);
    console.log('setNotes:', setNotes);
    console.log('noteToEdit:', noteToEdit);
    
    if (!noteToEdit) {
      navigate('/');
    }
  }, [notes, setNotes, noteToEdit, navigate]);

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Save button clicked.');

    const updatedNote = { ...noteToEdit, title, details };
    const updatedNotes = notes.map(note => note.id === id ? updatedNote : note);
    setNotes(updatedNotes);
    navigate('/');
  };

  const handleDelete = () => {
    console.log('Delete button clicked.');

    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    navigate('/');
  };

  const [title, setTitle] = useState(noteToEdit ? noteToEdit.title : '');
  const [details, setDetails] = useState(noteToEdit ? noteToEdit.details : '');

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn"><IoIosArrowBack /></Link>
        <button className="btn lg primary" onClick={handleSave}>Save</button>
        <button className="btn danger" onClick={handleDelete}><RiDeleteBin6Line /></button>
      </header>
      <form className="create-note__form" onSubmit={handleSave}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea
          rows={28}
          placeholder="Note details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;