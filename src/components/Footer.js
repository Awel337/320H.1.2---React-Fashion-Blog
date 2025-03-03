import React from "react";

const Footer = () => {
  return (
    <footer>
      <nav aria-label="Footer Navigation" role="navigation">
        <ul className="footer-nav">
          <li><a href="javascript:void(0);">Home</a></li>
          <li><a href="javascript:void(0);">Women's</a></li>
          <li><a href="javascript:void(0);">Men's</a></li>
          <li><a href="javascript:void(0);">On the Street</a></li>
          <li><a href="javascript:void(0);">The Catwalk</a></li>
          <li><a href="javascript:void(0);">AdWatch</a></li>
          <li><a href="javascript:void(0);">About</a></li>
          <li><a href="javascript:void(0);">Tips</a></li>
        </ul>
      </nav>
      <p className="copyright">&copy; 2013 Valet Industries, Inc</p>
    </footer>
  );
};

export default Footer;
