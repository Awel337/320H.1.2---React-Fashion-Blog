import React from "react";

const Footer = () => {
  return (
    <footer>
      <nav aria-label="Footer Navigation" role="navigation">
        <ul className="footer-nav">
          <li><a href="#" onClick={(e) => e.preventDefault()}>Home</a></li>
          <li><a href="#" onClick={(e) => e.preventDefault()}>Women's</a></li>
          <li><a href="#" onClick={(e) => e.preventDefault()}>Men's</a></li>
          <li><a href="#" onClick={(e) => e.preventDefault()}>On the Street</a></li>
          <li><a href="#" onClick={(e) => e.preventDefault()}>The Catwalk</a></li>
          <li><a href="#" onClick={(e) => e.preventDefault()}>AdWatch</a></li>
          <li><a href="#" onClick={(e) => e.preventDefault()}>About</a></li>
          <li><a href="#" onClick={(e) => e.preventDefault()}>Tips</a></li>
        </ul>
      </nav>
      <p className="copyright">&copy; 2013 Valet Industries, Inc</p>
    </footer>
  );
};

export default Footer;
