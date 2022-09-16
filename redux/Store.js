import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./Reducers/ProductReducer";
import { userReducer } from "./Reducers/UserReducer";

const Store = configureStore({
    reducer:{
            products: productsReducer,
            user: userReducer,
    }
});
export default Store;