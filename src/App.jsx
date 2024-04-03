import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminLoginPage from './pages/AdminLoginPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />

        <Route path='/admin-login' element={<AdminLoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;