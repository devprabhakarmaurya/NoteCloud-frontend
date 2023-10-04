import React from 'react';

const About = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6">
          <h2 className="mb-4">Welcome to NoteCloud</h2>
          <big>
            NoteCloud is a secure note-taking application that allows you to
            save your notes in the cloud, providing you with access to your
            notes from anywhere at any time.
          </big>
          <big>
            Sign up and log in to start creating and managing your notes.
            Only logged-in users have access to their own notes.
          </big>
        </div>
        <div className="col-lg-6">
          <h2 className="mb-4">Key Features</h2>
          <ul>
            <li>Create, edit, and delete notes</li>
            <li>Securely save your notes in the cloud</li>
            <li>User authentication to keep your notes private</li>
            <li>Easy-to-use interface for an intuitive experience</li>
            
          </ul>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-12">
          <h2 className="mb-4">How to Use NoteCloud</h2>
          <ol>
            <li>
              <strong>Sign Up:</strong> If you're a new user, sign up for an
              account.
            </li>
            <li>
              <strong>Login:</strong> After signing up, log in with your
              credentials.
            </li>
            <li>
              <strong>Create Note:</strong> Once logged in, you can create a
              new note by clicking the "Create Note" button.
            </li>
            <li>
              <strong>Edit Note:</strong> Click on a note to edit its content.
            </li>
            <li>
              <strong>Delete Note:</strong> To delete a note, click the delete
              button associated with the note.
            </li>
            <li>
              <strong>Logout:</strong> To log out, click the logout button.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default About;
