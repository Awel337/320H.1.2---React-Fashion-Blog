import React from "react";

const Footer = () => {
  return (
    <footer>
      <nav aria-label="Footer Navigation" role="navigation">
        <ul className="footer-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/womens">Women's</a></li>
          <li><a href="/mens">Men's</a></li>
          <li><a href="/on-the-street">On the Street</a></li>
          <li><a href="/catwalk">The Catwalk</a></li>
          <li><a href="/adwatch">AdWatch</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/tips">Tips</a></li>
        </ul>
      </nav>
      <p className="copyright">&copy; 2013 Valet Industries, Inc</p>
    </footer>
  );
};

export default Footer;
