import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { logo } from './assets';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './constants/ThemeContext';

import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <header className='w-full flex justify-between items-center bg-primary sm:px-8 px-4 py-4 border-b border-primary'>
          <Link to='/'>
            <img
              src={logo}
              alt='logo'
              height={50}
              width={125}
              className=' object-contain'
            />
          </Link>

          {/* <div className='lg:mr-[-700px] md:mr-[-300px] sm:mr-[-300px] mr-[-135px]'>
          </div> */}

          <div className='flex items-center gap-2'>
          <ThemeToggle />
          <Link
            to='/create-post'
            className='font-inter font-medium bg-[#4583e7] text-white px-4 py-2 rounded-md'
          >
            Create
          </Link>
            

          </div>

         
        </header>

        <main className='sm:p-8 px-4 py-8 w-full bg-primary min-h-[calc(100vh-73px)]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create-post' element={<CreatePost />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
