import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useParams, useNavigate } from 'react-router-dom';
import useCreateDate from "../components/useCreateDate";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const date = useCreateDate();

  const noteToEdit = notes.find(note => note.id === id);

  const [title, setTitle] = useState(noteToEdit ? noteToEdit.title : '');
  const [details, setDetails] = useState(noteToEdit ? noteToEdit.details : '');

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

    const updatedNote = { ...noteToEdit, title, details, date };
    const updatedNotes = notes.map(note => note.id === id ? updatedNote : note);
    setNotes(updatedNotes);
    navigate('/');
  };

  const handleDelete = () => {
    console.log('Delete button clicked.');

    const confirmMessage = `Are you sure you want to delete the note titled "${noteToEdit.title}"?`;
    if (window.confirm(confirmMessage)) {
      const updatedNotes = notes.filter(note => note.id !== id);
      setNotes(updatedNotes);
      navigate('/');
    }
  };

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
