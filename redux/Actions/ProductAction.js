import axios from "axios";

export const getProduct = () => async (dispatch) => {
    try {
      dispatch({
        type: "allProductRequest",
      });
      const {data} = await axios.get('https://ite301api.000webhostapp.com/phprestapi/api/product/read.php');
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
  // add to wishlist
export const addWishList =
(
  productName,
  quantity,
  productImage,
  productPrice,
  userId,
  productId,
  Stock,
) =>
async dispatch => {
  try {
    dispatch({
      type: 'addWishListRequest',
    });
    const {data} = await axios.post(
      `https://adbuy.herokuapp.com/api/v2/addToWishlist`,
      {
        productName,
        quantity,
        productImage,
        productPrice,
        userId,
        productId,
        Stock,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    dispatch({
      type: 'addWishListSuccess',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'addWishListFail',
      payload: error.response.data.message,
    });
    console.log(error.response.data.message)
  }
};

// remove from wishlist
export const removeWishList = id => async dispatch => {
try {
  dispatch({
    type: 'removeWishListRequest',
  });
  const {data} = await axios.delete(`https://adbuy.herokuapp.com/api/v2/removeWishlist/${id}`);
  dispatch({
    type: 'removeWishListSuccess',
    payload: data,
  });
} catch (error) {
  dispatch({
    type: 'removeWishListFail',
    payload: error.response.data.message,
  });
}
};

// get wishlist data
export const getWishList = () => async dispatch => {
try {
  dispatch({
    type: 'getWishListRequest',
  });
  const {data} = await axios.get(`https://adbuy.herokuapp.com/api/v2/wishlist`);
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
  