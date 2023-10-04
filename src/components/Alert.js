import React from 'react';

function Alert(props) {
  return (
    <>
      {
        props.alert &&
        <div className="position-fixed top-0 end-0 my-5 pt-3 mx-2"  style={{ zIndex: 9999 }}>
          <div class={`alert alert-${props.alert.type} fade show`} role="alert">
            {props.alert.msg}
          </div>
        </div>
      }
    </>


  )
}

export default Alert;