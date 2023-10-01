import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

function Addnote() {
    const context = useContext(noteContext)
    const {addNote} = context;
    const [note ,setNote] = useState({title: "",description: "", tag: ""})

    const handleClick=(e)=>{
        e.preventDefault()
        addNote(note.title, note.description, note.tag);
    }

    const onChange=(event)=>{
        setNote({...note, [event.target.name]: event.target.value })
    }
  return (
    <>
        <h2 className='my-3'>Add Note</h2>
        <form action="">
            <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input className="form-control" id="title"  name='title' onChange={onChange} ></input>
            </div>
            <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" name='description' onChange={onChange} rows="5"></textarea>
            </div>
            <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tags</label>
            <input className="form-control" id="tage" name='tag' onChange={onChange} ></input>
            </div>
            <div className="mb-3">
            <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </div>
        </form>
    </>
  )
}

export default Addnote;