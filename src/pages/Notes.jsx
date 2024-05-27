import {CiSearch} from 'react-icons/ci'
import dummyNotes from '../dummy_notes'
import { Link } from 'react-router-dom'
import { BsPlusLg } from 'react-icons/bs'

import Noteitem from '../components/Noteiem'




const Notes = ({notes}) => {
  return (
    <section>
      <header className="notes__header">
        <h2>My Notes</h2>
        {/* input type="text" autoFocus placeholder='Keyword...' />
        */}
        <button className='btn'><CiSearch /></button>
      </header>
      <div className="notes__container">
        {
          dummyNotes.map(note => <Noteitem key={note.id} note={note}/>)
        }  
        
      </div>
      <Link to="/create-note" className='btn add__btn'><BsPlusLg/></Link>
    </section>
  )
} 

export default Notes

