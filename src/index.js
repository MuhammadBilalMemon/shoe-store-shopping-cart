import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Home';
import ProductList from './Components/Shop/ProductList';
import Product from './Components/Shop/Product';
import ProductDetails from './Components/Shop/ProductDetails';
import Header from './Components/Header/Header';
import Footer from './Components/Footer';


import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ProductContextProvider } from './Context/ProductContext';

ReactDOM.render(
  <React.StrictMode>
    <ProductContextProvider>
      <div style={{ "text-align": "center" }}>
        <Router>
          <Header />
          <h1 style={{ textAlign: "center" }}>Shoe Store</h1>
          <Routes>
            <Route Path="/" element={<Home />} />
            <Route path="products" element={<Product />} >
              <Route path="/" element={<ProductList />}></Route>
              <Route path=":slug" element={<ProductDetails />}></Route>
            </Route>
          </Routes>
        </Router>
        <Footer />
      </div>
    </ProductContextProvider>
  </React.StrictMode >,
  document.getElementById('root')
);
