import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Components/Home';
import ProductList from './Components/Shop/ProductList';
import Product from './Components/Shop/Product';
import ProductDetails from './Components/Shop/ProductDetails';
import Header from './Components/Header/Header';
import Footer from './Components/Footer';
import Cart from './Components/ShoppingCart/Cart';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProductContextProvider } from './Context/ProductContext';
import { ShoppintCartProivder } from './Context/ShoppingCartContext';


ReactDOM.render(
  <React.StrictMode>
    <ProductContextProvider>
      <ShoppintCartProivder>
        <div style={{ "text-align": "center" }}>
          <Router>
            <Header />
            <h1 style={{ textAlign: "center" }}>Shoe Store</h1>
            <Routes>
              <Route exact Path="/" element={<Home />} />
              <Route path="products" element={<Product />} >
                <Route path="/" element={<ProductList />} />
                <Route path="product/:slug" element={<ProductDetails />} />
              </Route>
              <Route path="cart" element={<Cart />} />
            </Routes>
          </Router>
          <Footer />
        </div>
      </ShoppintCartProivder>
    </ProductContextProvider>
  </React.StrictMode >,
  document.getElementById('root')
);
