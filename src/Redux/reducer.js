import {Get_Pro} from './actionTypes'
//import { getProductsError,getProductsLoading,getProductsSuccess } from './actions';
// const initState = {
//   data: [],
//   isLoading: false,
//   isError: false,
//   filterData: [],
//   products: [],
// };

const reducer = (state, action) => {
  switch (action.type) {
    // case getProductsLoading:
    //   return {
    //     ...state,
    //     data: [],
    //     isLoading:true,
    //     isError:false,
    //     filterData: [],
    //     products:[],
    //   }
    //   case getProductsSuccess:
    //     return {
    //       ...state,
    //       data: [],
    //       isLoading:false,
    //       isError:false,
    //       filterData: [],
    //     //  products:payload,
    //     }
    //     case getProductsError:
    //       return {
    //         ...state,
    //         data: [],
    //         isLoading:false,
    //         isError:true,
    //         filterData: [],
    //         products:[],
    //       }
          case Get_Pro:{
            return {
              ...state,
              products: {
                isLoading : false,
                isError : false,
                data:action.payload,
              }
            }
          }
        default:
          return {...state};
  }
};
export { reducer };
