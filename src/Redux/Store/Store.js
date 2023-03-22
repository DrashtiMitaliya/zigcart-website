// import from packages
import { configureStore } from "@reduxjs/toolkit";

// import from files
import productReducer from '../Reducers/ProductSlice'

const store  = configureStore({
  /* Creating a reducer which is handling all products */
    reducer :{
        products : productReducer
    }
})
export default store
