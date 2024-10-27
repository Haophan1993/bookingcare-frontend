import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:8080/api/login', { email, password });
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.token });
    localStorage.setItem('token', res.data.token);
  } catch (error) {
    dispatch({ type: 'LOGIN_FAIL', payload: error.response.data.message });
  }
};
