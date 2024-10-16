import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';
import Contact from './Contact';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<App></App>}></Route>
 <Route path="/home" element={<Home></Home>}></Route>
 <Route path="/about" element={<About></About>}></Route>
 <Route path="/contact" element={<Contact></Contact>}></Route>
 </Routes>
 </BrowserRouter>
 
);

