import axios from 'axios';

// Login User
export const userLogin = (email, password) => async dispatch => {
  try {
    dispatch({
      type: 'userLoginRequest',
    });

    const config = {headers: {'Content-Type': 'application/json'}};

    const {data} = await axios.post(
      `https://adbuy.herokuapp.com/api/v2/login`,
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
      `https://adbuy.herokuapp.com/api/v2/me`,
    );

    dispatch({type: 'userLoadSuccess', payload: data.user});
  } catch (error) {
    dispatch({type: 'userLoadFailed', payload: error.response.data.message});
  }
};
//register
export const register = (name, email, password) => async dispatch => {
  try {
    dispatch({type: 'userCreateRequest'});

    const {data} = await axios.post(
      `https://adbuy.herokuapp.com/api/v2/register`,
      {name, email, password},
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    dispatch({type: 'userCreateSuccess', payload: data.user});
  } catch (error) {
    dispatch({
      type: 'userCreateFail',
      payload: error.response.data.message
    });
  }
};

//logout
 export const LogOutUser = () =>async (dispatch) =>{
  try {
    await axios.get(`https://adbuy.herokuapp.com/api/v2/logout`);
    dispatch({type: 'userLogOutSucess'});
  } catch (error) {
    dispatch({type: 'userLogOutFail', payload: error.response.data.message});
  }
}
// Forgot Password
export const forgotPassword = (email) => async dispatch => {
  try {
    dispatch({type: 'forgotPasswordRequest'});

    const config = {headers: {'Content-Type': 'application/json'}};

    const {data} = await axios.post(
      `https://adbuy.herokuapp.com/api/v2/password/forgot`,
      {email},
      config,
    );
    dispatch({type: 'forgotPasswordSuccess', payload: data.message}); 
  } catch (error) {
    dispatch({
      type: 'forgotPasswordFailed',
      payload: error.response.data.message,
    });
  }
};