import React from 'react'

const Footer = (props) => {
  return (
    <footer className={`bg-${props.mode==="light"?"light":"dark"} text-center text-lg-start mt-5`}>
      <div className="text-center pt-1">
        <span className="me-2">
          <a
            href="https://github.com/devprabhakarmaurya"
            target="_blank"
            
          >
            <big><i className="fab fa-github"></i></big>
          </a>
        </span>
        <span className="me-2">
          <a
            href="https://www.linkedin.com/in/devprabhakarmaurya"
            target="_blank"
            
          >
            <big><i className="fab fa-linkedin"></i></big>
          </a>
        </span>
        {/* <span>
          <a
            href="https://twitter.com/yourtwitterusername"
            target="_blank"
           
          >
            <i className="fab fa-twitter"></i>
          </a>
        </span> */}
      </div>
      <div className={`text-${props.mode==="light"?"dark":"light"} text-center p-1`}>
        <p>&copy; 2023 Prabhakar Maurya. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer