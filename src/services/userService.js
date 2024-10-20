import axios from '../axios';


const handleLoginApi = (userEmail, userPassword)=>{
    

    
    return axios.post('http://localhost:8080/api/login', { email:userEmail, password:userPassword});

}

export{

    handleLoginApi
}


