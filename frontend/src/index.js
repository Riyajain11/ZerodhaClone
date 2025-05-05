import React from 'react';
import ReactDOM from 'react-dom/client';  
import{ BrowserRouter , Routes ,Route }  from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/Homepage';
import Signup from './landing_page/signup/Signup';
import Pricing from './landing_page/pricing/PricingPage'; 
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductsPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Notfound from './landing_page/NotFound'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} /> 
      <Route path='/about' element={<AboutPage />} /> 
      <Route path='/products' element={<ProductPage />} />
      <Route path='/pricing' element={<Pricing />} /> 
      <Route path='/support' element={<SupportPage />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  <Footer />
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

