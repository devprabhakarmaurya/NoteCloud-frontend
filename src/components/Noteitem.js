import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

function Noteitem(props) {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const note = props.note;
    const updateNote = props.updateNote;
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleDelete = () => {
        deleteNote(note._id);
        setShowDeleteModal(false);
        props.showAlert("Note Deleted Successfully", "danger");
    };
    return (
        <>
            <div className="card rounded shadow-sm">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{note.title}</h5>
                        <div className='icon'>
                            <i className="fa-solid fa-pen-to-square px-2" onClick={() => { updateNote(note) }} ></i>
                            <i className="fa-solid fa-trash px-2" onClick={() => {
                                setShowDeleteModal(true)
                            }}></i>
                        </div>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
            {/* Delete confirmation modal */}
            <div
                className={`position-fixed top-1 mt-5 modal fade ${showDeleteModal ? 'show' : ''}`}
                id="deleteModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="deleteModalLabel"
                aria-hidden={!showDeleteModal}
                style={{ display: showDeleteModal ? 'block' : 'none' }}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteModalLabel">
                                Confirm Delete
                            </h5>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete this item?
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => setShowDeleteModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Backdrop */}
            {showDeleteModal && (
                <div
                    className="modal-backdrop fade show"
                    style={{ zIndex: 1050 }}
                    onClick={() => setShowDeleteModal(false)}
                ></div>
            )}

        </>

    )
}

export default Noteitem