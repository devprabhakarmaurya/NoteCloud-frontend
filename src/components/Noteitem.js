import React, { useContext} from 'react'
import noteContext from '../context/notes/noteContext'

function Noteitem(props) {
    const context = useContext(noteContext);
    const { deleteNote} = context;
    const note = props.note;
    const updateNote = props.updateNote;
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{note.title}</h5>
                        <div className='icon'>
                            <i className="fa-solid fa-pen-to-square px-2" onClick={() => { updateNote(note) }} ></i>
                            <i className="fa-solid fa-trash px-2" onClick={() => { deleteNote(note._id) }}></i>
                        </div>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </>

    )
}

export default Noteitem