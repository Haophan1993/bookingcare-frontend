import axios from 'axios';
import _ from 'lodash';


const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    //withCredentials: true
});



export default instance;
