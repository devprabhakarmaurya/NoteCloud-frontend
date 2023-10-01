import React from 'react'

function Noteitem(props) {
    const note = props.note    
    return (
        <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{note.title}</h5>
                        <div className='icon'>
                            <i className="fa-solid fa-pen-to-square px-2"></i>
                            <i className="fa-solid fa-trash px-2"></i>

                        </div>
                    </div>
                    <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam, animi eius deserunt accusamus repudiandae autem corrupti suscipit laboriosam numquam vel, ad eligendi nostrum perspiciatis? Praesentium vitae consequatur explicabo est.</p>
                </div>
        </div>
    )
}

export default Noteitem