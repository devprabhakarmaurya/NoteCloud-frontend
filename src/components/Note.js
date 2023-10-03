import React,{useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';

function Note() {
    const context = useContext(noteContext);
    const { notes , getNote} = context;
    useEffect(() => {
      getNote();  
    }, [])
    
    return (
      <>
      <h2 className='text-center my-4'>MY NOTES</h2>
      <div className='row my-3'>
        {notes.map((note) => (
            <div key={note._id} className="col-md-4 my-3">
                <Noteitem note={note} />
            </div>
        ))}
      </div>
      </>
    );
}

export default Note;