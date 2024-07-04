import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider } from './constants/ThemeContext';

import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <main className='bg-primary min-h-[calc(100vh-73px)]'>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/home' element={<Home />} />
            <Route path='/create-post' element={<CreatePost />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
