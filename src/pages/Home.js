import React from 'react'
import Note from '../components/Note'

function Home() {
  return (
    <>
      <h2 className='my-3'>Add Note</h2>
      <form action="">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input className="form-control" id="title" ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="note" className="form-label">Decription</label>
          <textarea className="form-control" id="note" rows="5"></textarea>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary ">Submit</button>
        </div>
      </form>
      <h2 className=''>My Notes</h2>
      <Note/>

    </>
  )
}

export default Home