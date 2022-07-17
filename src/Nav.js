import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
    if(window.scrollY > 100) {
      handleShow(true);
    }else handleShow(false);
  });
  return () => {
    window.removeEventListener("scroll",handleShow);
  };
}, []);

  return (
    <div className={`'nav' ${show && 'nav_black'}`}>
        <img
            className='nav_logo'
            src='https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg'
            alt='Amazon Prime Video Logo'
        />
    </div>
  )
}

export default Nav