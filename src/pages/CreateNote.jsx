import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import useCreateDate from "../components/useCreateDate";

const CreateNote = ({ setNotes }) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [reminder, setReminder] = useState('');
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && details) {
      const note = { id: uuid(), title, details, date, reminder };
      console.log('New Note', note);

      setNotes(prevNotes => {
        const newNotes = [note, ...prevNotes];
        console.log('Updated Notes:', newNotes);
        return newNotes;
      });

      navigate('/');
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn"><IoIosArrowBack /></Link>
        <button className="btn lg primary" onClick={handleSubmit}>Save</button>
      </header>
      <form className="create-note__form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea rows={28} placeholder="Note details..." value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
        <input type="datetime-local" value={reminder} onChange={(e) => setReminder(e.target.value)} />
      </form>
    </section>
  );
};

export default CreateNote;