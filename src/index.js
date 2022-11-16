import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import FoodItems from "./MainBody/item/FoodItems";
import Main from "./MainBody/main/Main";
import Head from './Header/Head';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Head />
      <Routes>
        <Route path="/cookbook-v2" element={<Main />} />
        <Route path="thedevs" element={<App />} />
        <Route path="cookbook-v2/:food" element={<FoodItems />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

