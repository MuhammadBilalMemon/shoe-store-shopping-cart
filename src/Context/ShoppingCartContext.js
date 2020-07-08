import React, { createContext, useReducer } from 'react';
import { CartReducer, ADD_TO_CART } from './CartReducer'

// Initial State
const initialState = {
    addCartToItems: [],
    countItems: 0,
    totalAmount: 0
}

// Create context
export const ShoppingCartContext = createContext(initialState);

//Provider Component
export const ShoppintCartProivder = ({ children }) => {

    const [state, dispatch] = useReducer(CartReducer, initialState)

    //Actions
    const addProduct = (shoeItem) => {
        // console.log("Item Detail in Cart Context", shoeItem)
        dispatch({
            type: ADD_TO_CART,
            payload: shoeItem
        })
    }

    return (

        <ShoppingCartContext.Provider value={{
            ...state,
            addProduct
        }}>
            {children}
        </ShoppingCartContext.Provider>

    );
}
