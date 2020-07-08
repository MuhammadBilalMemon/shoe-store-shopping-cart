const sumCartItems = (cartItems) => {
    let countItems = cartItems.reduce((total, product) => total + product.quantity, 0)
    let totalAmount = cartItems.reduce((total, product) => total + product.productPrice * product.quantity, 0).toFixed(2)
    return { countItems, totalAmount }
}

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CARD = "REMOVE_FROM_CARD";
export const INCREMENT_PRODUCT = "INCREMENT_PRODUCT"
export const DECREMENT_PRODUCT = "DECREMENT_PRODUCT"

export const CartReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (!state.addCartToItems.find(item => item.productId === action.payload.productId)) {
                state.addCartToItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }

            return {
                ...state,
                ...sumCartItems(state.addCartToItems),
                addCartToItems: [...state.addCartToItems]
            }
        case REMOVE_FROM_CARD:
            return {
                ...state,
                ...sumCartItems(state.addCartToItems.filter((p) => p.productId !== action.payload.productId)),
                addCartToItems: [...state.addCartToItems.filter((p) => p.productId !== action.payload.productId)]
            }
        case INCREMENT_PRODUCT:
            state.addCartToItems[state.addCartToItems.findIndex(item => item.productId === action.payload.productId)].quantity++

            return {
                ...state,
                ...sumCartItems(state.addCartToItems),
                addCartToItems: [...state.addCartToItems]
            }

        case DECREMENT_PRODUCT:
            state.addCartToItems[state.addCartToItems.findIndex(item => item.productId === action.payload.productId)].quantity--

            return {
                ...state,
                ...sumCartItems(state.addCartToItems),
                addCartToItems: [...state.addCartToItems]
            }

        default:
            return state;
    }
}