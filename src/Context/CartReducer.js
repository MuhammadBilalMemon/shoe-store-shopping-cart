const sumCartItems = (cartItems) => {
    let countItems = cartItems.reduce((total, product) => total + product.quantity, 0)
    let totalAmount = cartItems.reduce((total, product) => total + product.productPrice * product.quantity, 0).toFixed(2)
    return { countItems, totalAmount }
}

export const ADD_TO_CART = "ADD_TO_CART";


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
        default:
            return state;
    }
}