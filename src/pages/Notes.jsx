import {CiSearch} from 'react-icons/ci'
import React from 'react'
import dummyNotes from '../dummy_notes'
import { Link } from 'react-router-dom'
import { BsPlusLg } from 'react-icons/bs'

import Noteitem from '../components/Noteiem'




const Notes = ({notes}) => {
  const handleCreateNote = () => {
    
  };


  return (
    <section>
      <header className="notes__header">
        <h2>My Notes</h2>
        {/* input type="text" autoFocus placeholder='Keyword...' />
        */}
        <button className='btn'><CiSearch /></button>
      </header>
      <div className="notes__container">
        {/*Rendenring Individual notes */}
        {notes.map(note => (
          <Noteitem key={note.id} note={note} />
        ))}
        {/*link to the create note page*/}
        {
          dummyNotes.map(note => <Noteitem key={note.id} note={note}/>)
        }  
        
      </div>
      <Link to="/create-note" className='btn add__btn' onClick={handleCreateNote}><BsPlusLg></BsPlusLg></Link>
    </section>
  );
} ;

export default Notes;

