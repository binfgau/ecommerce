import React from 'react';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Binfgau Headphones All right reservers</p>
      <p className='icons'>
        <a href='https://www.instagram.com/im_binh/'>
          <AiFillInstagram />
        </a>
        <a href='https://www.facebook.com/binfgau'>
          <AiFillFacebook />
        </a>
      </p>
    </div>
  );
};

export default Footer;
