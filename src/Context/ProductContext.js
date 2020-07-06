import React, { createContext, useState } from 'react';
import { FakeProducts } from './../Services/FakeData';

export const ProductContext = createContext(FakeProducts);

export const ProductContextProvider = ({ children }) => {

    const [products] = useState(FakeProducts)

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
}

