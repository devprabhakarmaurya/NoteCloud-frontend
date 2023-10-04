import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

function Addnote(props) {
    const context = useContext(noteContext)
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleAddClick = (e) => {
        e.preventDefault()  // prevent to page reloading 
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        props.showAlert("Note Added Successfully","success");
    }

    const onChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value })
    }
    return (
        <>
            <div className="card my-4 rounded shadow-lg ">
                <div className="card-header">
                    <h2 className=''>Add Note</h2>
                </div>
                <div className="card-body">
                    <form action="">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input className="form-control" id="title" name='title' value={note.title} onChange={onChange} minLength={5} required ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea className="form-control" id="description" name='description' value={note.description} onChange={onChange} minLength={5} required rows="5"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tag" className="form-label">Tags</label>
                            <input className="form-control" id="tage" name='tag' value={note.tag} onChange={onChange} minLength={3} ></input>
                        </div>
                        <div className="mb-3">
                            <button type="submit" disabled={note.title.length <5 || note.description.length < 5 } className="btn btn-primary" onClick={handleAddClick}>Add Note</button>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}

export default Addnote;