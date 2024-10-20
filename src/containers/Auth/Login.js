import React, { Component } from 'react';
import facebookicon from '../../assets/images/facebook-brand.svg';
import googleicon from '../../assets/images/google-brand.svg';
import './Login.scss';

import {handleLoginApi} from '../../services/userService';
class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: '',
        }
    }

    handleOnchangeUserName = (e)=>{
        
        this.setState({
            email: e.target.value,
        })
        
    }

    handleOnchangePassword = (e)=>{
        
        this.setState({
            password: e.target.value,
        })
        
    }

    handleLogin= async()=>{


        console.log(this.state);

       try{
        await handleLoginApi(this.state.email, this.state.password);
        

       }catch(e){
        console.log(e);
       }
        
    }



    render(){

        return(

            <div className="container"> 
                <div className="login-content rounded-5  mt-5 p-3  row  ">
                    <div className="text-login col-12 text-center mt-2">Login</div>

                    <div className="col-12 form-group login-input">
                    <label>User Name:</label>
                    <input type="text" className="form-control mb-2" 
                    placeholder="Enter user name" 
                    value={this.state.email}
                    onChange={(e)=> this.handleOnchangeUserName(e)}
                    ></input>
                    </div>
                    
                    <div>

                    <label>PassWord:</label>
                    <input type="password" className="form-control mb-2" placeholder="Enter password"
                    onChange={(e)=> this.handleOnchangePassword(e)}
                    value={this.state.password}></input>

                    </div>
                    <div className=" col-12 text-center">
                    <button className="btn btn-secondary"
                    onClick={()=>this.handleLogin()}>Login</button>
                    </div>

                    <div className="text-forgot-password col-12">

                    <span>Forgot your password</span>

                    </div>

                    <div className="col-12 text-center">

                        <span className="text-orLogin-with">Or Login with:</span>

                    </div>
                    <div className="col-12 social-login text-center">

                    <img className='facebookicon ' src={facebookicon} />
                    <img className='googleicon ' src={googleicon}/>
                    
                    </div>
                </div>

         </div>

        )
    }
}

export default Login;

