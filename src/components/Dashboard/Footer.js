import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">Copy right  </div>
      <div className="footer__signature">&copy; {new Date().getFullYear()} HOMMESESTATE</div>
    </footer>
  );
};

export default Footer;
