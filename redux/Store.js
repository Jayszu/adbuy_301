import { configureStore } from "@reduxjs/toolkit";
import { productsReducer, wishListaddReducer, wishListDataReducer, wishListRemoveReducer } from "./Reducers/ProductReducer";
import { forgotPasswordReducer, userReducer } from "./Reducers/UserReducer";
import {createStore, combineReducers , applyMiddleware} from 'redux';
import { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";



const Store = configureStore({
    reducer:{
            products: productsReducer,
            user: userReducer,
            forgotPassword: forgotPasswordReducer,
            wishListRemove:wishListRemoveReducer,
            wishListAdd:wishListaddReducer,
            wishlistData:wishListDataReducer,
    }
});
export default Store;