import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';
import SearchForm from './components/SearchForm/SearchForm';
import './index.css';
import './components/component.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='book' element={<BookList/>} />
        <Route path='book/:id' element={<BookDetails/>} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

