import axios from "axios";

export const getProduct = () => async (dispatch) => {
    try {
      dispatch({
        type: "allProductRequest",
      });
      const {data} = await axios.get('https://adbuy.herokuapp.com/api/v2/products');
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
  