import axios from "axios";

export const apiFunction =(productId)=>{
    return axios.get(`https://dummyjson.com/products/${productId}`)
    .then((response) => response.data)
}