import React, { useEffect } from 'react';
import Typed from 'typed.js';
import icon from '../assets/icon.png';

const MainPage = () => {
  useEffect(() => {
    // Initialize Typed.js
    new Typed('.typed-text', {
      strings: [
        "Generate images using prompts for free",
        "By using our  <strong class='primary'>Artistry</strong> AI tool"
      ],
      typeSpeed: 50,
      loop: true,
      backDelay: 2000, // Delay before deleting text
      backSpeed: 25, // Speed of deleting text
      showCursor: false, // Hide the cursor
    });
  }, []);

  return (
    <div className='main mainpage-container'>
      <div className='text-overlay'>
        <img 
          src={icon} 
          alt='logo' 
          className='logo'
        />
        <div className='typed-container'>
          <div className='typed-text' />
        </div>
        <a href='/home'>
          <div className='cta-button'>
            Try it now !
          </div>
        </a>
      </div>
    </div>
  );
}

export default MainPage;
