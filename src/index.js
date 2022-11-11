import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,NavLink, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import FoodItems from "./MainBody/item/FoodItems";
import Main from "./MainBody/main/Main";
<<<<<<< HEAD
=======
import reportWebVitals from './reportWebVitals';
import Head from './Header/Head';
>>>>>>> bd87b0c4462e19687aec4c1bcb4702166d0debf1


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Head />
    
          <Routes>
        <Route path="/" element={<App />} />
        <Route path="main" element={<Main />} />
        <Route path="main/:food" element={<FoodItems />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

