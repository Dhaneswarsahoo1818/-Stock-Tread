import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter ,  Routes, Route} from 'react-router-dom';
import Homepage from './Landing_Page/home/Homepage';
import Signup from './Landing_Page/signup/Signup';
import Aboutpage from './Landing_Page/about/Aboutpage';
 import PricingPage from './Landing_Page/pricing/PricingPage';
import SupportPage from './Landing_Page/support/SupportPage';
import ProductPage from './Landing_Page/product/ProductPage';
import Footer from './Footer';
import NavBar from './NavBar';
import Notfound from './Landing_Page/Notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <NavBar/>
 <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/about' element={<Aboutpage/>}/>
    <Route path='/product' element={<ProductPage/>}/>
     <Route path='/pricing' element={<PricingPage/>}/> 
    <Route path='/support' element={<SupportPage/>}/>
     <Route path='*' element={<Notfound/>}/>

  </Routes>
 <Footer/>
 </BrowserRouter>

);


