import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Soup from './pages/Soup';
import Salad from './pages/Salad';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Soup />} />
        <Route path='/Salad' element={<Salad />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
