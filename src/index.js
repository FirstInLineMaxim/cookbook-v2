import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import FoodItems from "./MainBody/item/FoodItems";
import Main from "./MainBody/main/Main";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="main" element={<Main />} />
        <Route path="main/:food" element={<FoodItems />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

