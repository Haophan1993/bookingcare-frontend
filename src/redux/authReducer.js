const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, token: action.payload, isAuthenticated: true, error: null };
      case 'LOGIN_FAIL':
        return { ...state, error: action.payload, isAuthenticated: false };
      default:
        return state;
    }
  };
  
  export default authReducer;
  