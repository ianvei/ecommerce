import { createContext, useState, useReducer } from "react";
import cartReducer from "./Reducers";

const CartContext = createContext();

export function CartProvider({children}) {
    // const [items, setItems] = useState([]);

    // const addToCart = ( e, name, price, staticImg ) => {
    //     e.preventDefault()
    //     console.log(name)
    //     setItems((prevItems) => [...prevItems, {
    //         name: name,
    //         price: price,
    //         image: staticImg,
    //     }])
    //     console.log(items)
    // }

    const [state, dispatch] = useReducer(cartReducer, {
        cart: [],
    })

    return (
        <CartContext.Provider value={{state, dispatch}}>{children}</CartContext.Provider>
    )
}


export default CartContext;