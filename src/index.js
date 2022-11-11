import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,NavLink, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import FoodItems from "./MainBody/item/FoodItems";
import Main from "./MainBody/main/Main";
import Head from './Header/Head';
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Head />
    
          <Routes>
        <Route path="/" element={<Main />} />
        <Route path="main" element={<App/>} />
        <Route path="/:food" element={<FoodItems />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

