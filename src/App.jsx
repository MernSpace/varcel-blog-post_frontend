import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminLoginPage from './pages/AdminLoginPage';
import ForgetPasswordPage from "./pages/ForgetPasswordPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProtfolioPage from "./pages/ProtfolioPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import BolgPage from "./pages/BolgPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import OptPage from "./pages/optPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about-us' element={<AboutPage/>} />
        <Route path='/protfolio' element={<ProtfolioPage/>} />
        <Route path='/service' element={<ServicePage/>} />
        <Route path='/blog' element={<BolgPage/>} />
        <Route path='/contact' element={<ContactPage/>} />

        <Route path='/admin-login' element={<AdminLoginPage/>} />
        <Route path='/forget-password' element={<ForgetPasswordPage/>} />
        <Route path='/opt' element={<OptPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;