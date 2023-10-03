import React, { useContext, useEffect, useRef,useState } from 'react'
import Addnote from '../components/Addnote';
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';

function Note() {
  const context = useContext(noteContext);
  const { notes, getNote, editNote } = context;
  const [note, setNote] = useState({ id: "",edit_title: "", edit_description: "", edit_tag: "" }) // for field state of modal
  const refOpen = useRef(''); 
  const refClose = useRef(''); 
  useEffect(() => {
    getNote();
    // eslint-disable-next-line
  }, [])
  const updateNote=(currentNote)=>{
    refOpen.current.click();
    setNote({
      id: currentNote._id,
      edit_title: currentNote.title,
      edit_description: currentNote.description,
      edit_tag: currentNote.tag,
    })
  }
  const onChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value })
  }
  const handleUpdateClick=(e)=>{
    // e.preventDefault();
    editNote(note.id,note.edit_title,note.edit_description,note.edit_tag)
    refClose.current.click();
  }
  return (
    <>
      <Addnote />
      {/* For editing note  */}
      {/* /// Modal For edit Note */}

      <button type="button" ref={refOpen} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" />
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <form action="" >
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">

                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input className="form-control" id="title" name='edit_title' value={note.edit_title} onChange={onChange} ></input>
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea className="form-control" id="description" name='edit_description' value={note.edit_description} onChange={onChange} rows="3"></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tags</label>
                  <input className="form-control" id="tag" name='edit_tag' value={note.edit_tag} onChange={onChange} ></input>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={handleUpdateClick}>Update Note</button>

              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Fetching all notes */}
      <h2 className='text-center my-4'>MY NOTES</h2>
      <div className='row my-3'>
        {notes.map((note) => (
          <div key={note._id} className="col-md-4 my-3">
            <Noteitem note={note} updateNote={updateNote} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Note;