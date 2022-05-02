// use axios for api call
import axios from "axios";
//import { type } from '@testing-library/user-event/dist/type';
import {Get_Pro} from './actionTypes'

// export const getProductsLoading = () =>({
//     type: getProductsLoading
// });
// export const getProductsSuccess = () =>({
//     type: getProductsSuccess,
//     //payload
// });
// export const getProductsError = () =>({
//     type: getProductsError
// });
const getProductsData=async(dispatch)=>{
   try{
     //  dispatch({type:getProductsLoading})
   let res= await axios.get("https://movie-fake-server.herokuapp.com/products")
   let data= await res.data;
   console.log(data)
   dispatch(
       {
           type:Get_Pro,
           payload:data
       }
   )
}
   catch(e){
    //  dispatch({type: getProductsError});
    console.log(e);
   }
}

const sortProducts = () => {};

const filterProducts = () => {};

export { getProductsData, sortProducts, filterProducts };
