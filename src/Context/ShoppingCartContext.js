import React, { createContext, useReducer } from 'react';
import { CartReducer, ADD_TO_CART, REMOVE_FROM_CARD, INCREMENT_PRODUCT, DECREMENT_PRODUCT } from './CartReducer'

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
    const removeProduct = (productId) => {
        dispatch({
            type: REMOVE_FROM_CARD,
            payload: productId
        })
    }

    const increment = (shoeItem) => {

        dispatch({ type: INCREMENT_PRODUCT, payload: shoeItem })
    }

    const decrement = (shoeItem) => {
        dispatch({ type: DECREMENT_PRODUCT, payload: shoeItem })
    }

    return (

        <ShoppingCartContext.Provider value={{
            ...state,
            addProduct,
            removeProduct,
            increment,
            decrement
        }}>
            {children}
        </ShoppingCartContext.Provider>

    );
}
