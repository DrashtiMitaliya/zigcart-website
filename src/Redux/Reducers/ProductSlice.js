import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    products: [],
    error: ' ',
    totalProduct :100 ,
    skip :0 ,

};

// fetch data from api 
export const fetchProducts = createAsyncThunk("products/fetchProducts", (skip=0) => {
    return axios.get(`https://dummyjson.com/products?limit=8&skip=${skip} `)
        .then((response) => response.data)
})

// create action and reducers(to dispatch an action)
const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers : {
        paginationData :(state,action)=>{
            state.skip =action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
           
            state.loading = false;
            state.products = action.payload;
            state.error=""
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
          
            state.loading = false;
            state.products = [];
            state.error = action.error.message;
        })
    }
})

export default ProductSlice.reducer;
export const {paginationData}  =ProductSlice.actions
