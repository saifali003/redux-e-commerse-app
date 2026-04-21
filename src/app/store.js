import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../feature/cartSlice";
import searchReducer from "../feature/searchSlice";
export const store = configureStore({
   reducer:{
       cart:cartReducer,
       search:searchReducer,
   }
});