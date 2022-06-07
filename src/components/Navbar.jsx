import React from "react";

function Navbar() {

  return(
    <header className="header">
		  <h1 className="logo"><a href="/main">FilmSearch</a></h1>
        <ul className="main-nav">
          <li><a href="/signup">Signup</a></li>
          <li><a href="/signin">Signin</a></li>
        </ul>
	  </header> 
  )
}

export default Navbar;
