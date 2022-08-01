const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {...state, cart:[...state.cart, { ...action.payload, qty:1}]}
        case "REMOVE_FROM_CART":
            return {...state, cart:state.cart.filter((item) => item.id !== action.payload.id)}
        case "CHANGE_CART_QTY":
            return {
                ...state, 
                cart:state.cart.filter((item) => 
                item.id === action.payload.id ? (item.qty = action.payload.qty) : item.qty
                ),
            }
        case "INCREMENT_QTY":
            return {
                ...state,
                cart:state.cart.filter((item) => item.id === action.payload.id ? item.qty += 1 : item.qty)
            }
        case "DECREMENT_QTY":
        return {
            ...state,
            cart:state.cart.filter((item) => item.id === action.payload.id ? item.qty -= 1 : item.qty)
        }
        case "CHANGE_SIZE":
        return {
            ...state,
            // console.log('hi')
            cart:state.cart.filter((item) => item.id === action.payload.item.id ? item.size = action.payload.size : item.size)
            // cart:state.cart.filter((item) => console.log(action.payload))
            
        }
        default:
            return state;
    }
}

export default cartReducer;