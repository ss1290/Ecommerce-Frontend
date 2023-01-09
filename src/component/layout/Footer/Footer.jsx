import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className='leftFooter'>
        <h4>This is A MERN Ecommerce Website</h4>
        <p>This Website is for learning purpose only</p>
      </div>
      <div className='midFooter'>
        <h1>ECOMMERCE</h1>
      </div>
      <div className='rightFooter'>
        <h4>Follow Me</h4>
        <a href='https://www.instagram.com/_sh4sh4nk_'>Instagram</a>
        <a href='https://www.facebook.com/satannnnn'>Facebook</a>
        <a href='https://www.linkedin.com/in/sonu-shashank-440163197'>
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
