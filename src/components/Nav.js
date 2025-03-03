import React from "react";

const Nav = () => {
  return (
    <nav aria-label="Main Navigation" role="navigation">
      <ul className="nav">
        <li><a href="/">Women's</a></li>
        <li><a href="/mens">Men's</a></li>
        <li><a href="/on-the-street">On the Street</a></li>
        <li><a href="/catwalk">The Catwalk</a></li>
        <li><a href="/adwatch">AdWatch</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
