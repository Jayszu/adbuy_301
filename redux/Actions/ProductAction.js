import axios from "axios";
import { productsReducer } from "../Reducers/ProductReducer";

export const getProduct = () => async (dispatch) => {
    try {
      dispatch({
        type: "allProductRequest",
      });
      const {data} = await axios.get('https://adbuystore.000webhostapp.com/phprestapi/api/product/read.php');
      dispatch({
        type: "allProductSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "allProductFail",
        payload: error.response.data.message,
      });
    }
  };
//   // add to wishlist
// export const addWishList =
// (
//   name,
//   image,
//   price,
//   id,
//   category,
 
// ) =>
// async dispatch => {
//   try {
//     dispatch({
//       type: 'addWishListRequest',
//     });
//     const {data} = await axios.post(
//       `https://adbuystore.000webhostapp.com/phprestapi/api/wishlist/addtoWishlist.php`,
//       {
//         name,
//         image,
//         price,
//         id,
//         category,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       },
//     );
//     dispatch({
//       type: 'addWishListSuccess',
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: 'addWishListFail',
//       payload: error.response.data.message,
//     });
    
//   }
// };

// // remove from wishlist
// export const removeWishList = id => async dispatch => {
// try {
//   dispatch({
//     type: 'removeWishListRequest',
//   });
//   const {data} = await axios.delete(`https://adbuy.000webhostapp.com/phprestapi/api/wishlist/removeWishlist.php`,
//   {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   },
//   );
//   dispatch({
//     type: 'removeWishListSuccess',
//     payload: data,
//   });
// } catch (error) {
//   dispatch({
//     type: 'removeWishListFail',
//     payload: error.response.data.message,
//   });
// }
// };

// get wishlist data
export const getWishList = () => async dispatch => {
try {
  dispatch({
    type: 'getWishListRequest',
  });
  const {data} = await axios.get(`https://adbuystore.000webhostapp.com/phprestapi/api/wishlist/getWishlist.php`);
  dispatch({
    type: 'getWishListSuccess',
    payload: data.wishlistData,
  });
} catch (error) {
  dispatch({
    type: 'getWishListFail',
    payload: error.response.data.message,
  });
  
  
}
};
  