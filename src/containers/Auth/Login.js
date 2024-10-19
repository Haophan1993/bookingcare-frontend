import React, { Component } from 'react';
import facebookicon from '../../assets/images/facebook-brand.svg';
import googleicon from '../../assets/images/google-brand.svg';
import './Login.scss';

class Login extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(

            <div className="container"> 
                <div className="login-content rounded-5  mt-5 p-3  row  ">
                    <div className="text-login col-12 text-center mt-2">Login</div>

                    <div className="col-12 form-group login-input">
                    <label>User Name:</label>
                    <input type="text" className="form-control mb-2" placeholder="Enter user name"></input>
                    </div>
                    
                    <div>

                    <label>PassWord:</label>
                    <input type="password" className="form-control mb-2" placeholder="Enter password"></input>

                    </div>
                    <div className=" col-12 text-center">
                    <button className="btn btn-secondary">Login</button>
                    </div>

                    <div className="text-forgot-password col-12">

                    <span>Forgot your password</span>

                    </div>

                    <div className="col-12 text-center">

                        <span className="text-orLogin-with">Or Login with:</span>

                    </div>
                    <div className="col-12 social-login text-center">

                    <img className='facebookicon ' src={facebookicon} />
                    <img className='googleicon ' src={googleicon} />
                    
                    </div>
                </div>

         </div>

        )
    }
}

export default Login;

