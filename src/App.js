// import logo from './logo.svg';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import './App.css';
//import { Carousel } from 'bootstrap';
// import Carousel from './components/Carousel';
import About from './components/About';
import Cart from './components/Cart';  
import Contact from './components/Contact';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        {/* <Route path="/" exact>
          <ProductList />
        </Route> */}
        <Route path="/search" element={<SearchResults />} />

        <Route path="/" element={<ProductList />} />
        {/* New About page route */}
        <Route path="/about" element={<About />} /> 
        {/* Add Cart page route */}
        <Route path="/cart" element={<Cart />} /> 
        {/* Add Contact route */}
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
