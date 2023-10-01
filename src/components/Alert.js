import React from 'react';

function Alert(props) {
    return (
        <div className="position-fixed top-0 my-5 end-0 p-3" style={{ zIndex: 9999 }}>
        <div className="alert alert-primary show" role="alert">
          {props.message}
        </div>
      </div>
    )
}

export default Alert;