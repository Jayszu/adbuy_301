import axios from 'axios';

// Login User
export const userLogin = (email, password) => async dispatch => {
  try {
    dispatch({
      type: 'userLoginRequest',
    });

    const config = {headers: {'Content-Type': 'application/json'}};

    const {data} = await axios.post(
      `https://mern-nest-ecommerce.herokuapp.com/api/v2/login`,
      {email, password},
      config,
    );
    dispatch({
      type: 'userLoginSuccess',
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: 'userLoginFalse',
      payload: error.response.data.message,
    });
  }
};
export const loadUser = () => async dispatch => {
  try {
    dispatch({type: 'userLoadRequest'});

    const {data} = await axios.get(
      `https://mern-nest-ecommerce.herokuapp.com/api/v2/me`,
    );

    dispatch({type: 'userLoadSuccess', payload: data.user});
  } catch (error) {
    dispatch({type: 'userLoadFailed', payload: error.response.data.message});
  }
};