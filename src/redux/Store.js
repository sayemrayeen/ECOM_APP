import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";

// For Counter App
// import CounterSlice from "./Slices/CounterSlice";

// export const store = configureStore({
//     reducer: {
//         counter: CounterSlice
//     },
// })


export const store = configureStore({
    reducer: {
        cart: CartSlice
    }
})