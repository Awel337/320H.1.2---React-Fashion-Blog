import React from "react";

const Nav = () => {
  return (
    <nav aria-label="Main Navigation" role="navigation">
      <ul className="nav">
        <li><a href="#" onClick={(e) => e.preventDefault()}>Women's</a></li>
        <li><a href="#" onClick={(e) => e.preventDefault()}>Men's</a></li>
        <li><a href="#" onClick={(e) => e.preventDefault()}>On the Street</a></li>
        <li><a href="#" onClick={(e) => e.preventDefault()}>The Catwalk</a></li>
        <li><a href="#" onClick={(e) => e.preventDefault()}>AdWatch</a></li>
        <li><a href="#" onClick={(e) => e.preventDefault()}>About</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
