import React, { useContext } from 'react';
import { CiLight, CiDark } from "react-icons/ci";
import { ThemeContext } from '../constants/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      {theme === 'dark' ? (
        <div
          className='flex items-center text-sm cursor-pointer'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <CiLight className='text-primary text-2xl mr-2' />
          
        </div>
      ) : (
        <div
          className='flex items-center text-sm cursor-pointer'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <CiDark className='text-primary text-2xl mr-3' />
          
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
