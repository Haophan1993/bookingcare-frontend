import React, { Component, useState  } from 'react';
import facebookicon from '../../assets/images/facebook-brand.svg';
import googleicon from '../../assets/images/google-brand.svg';
import './Login.scss';

import {handleLoginApi} from '../../services/userService';

import { useDispatch, useSelector } from 'react-redux';

import {login} from '../../redux/authActions';

import { Navigate  } from 'react-router-dom';
import { connect } from 'react-redux';






class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: '',
            errMessage:'',
            login: false,
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


        this.setState({
            errMessage:'',
        })

       try{
        let resData=await handleLoginApi(this.state.email, this.state.password);
        console.log(resData)
        
        if(resData && resData.data.errCode !==0){
            this.setState({
                errMessage: resData.data.message
            })

        }
        if(resData && resData.data.errCode===0){
            console.log('User is authenticated, redirecting...');
            this.setState({
                login: true
            })
            

        }

       
        

       }catch(error){

        
        if(error.response){
            if(error.response.data){
                this.setState({
                    errMessage: error.response.data.messsage
                })
            }
        }
        
       }
        
    }



    render(){

        if (this.state.login) {
            return <Navigate to="/home" />;  // Redirect to the home page
          }

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

                    <div className='errorMessage col-12 text-center'>
                        
                        {this.state.errMessage}

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

// const mapDispatchToProps = dispatch=>{
//     return{
//         userLoginSuccess:()=>dispatch(actions.userLoginSuccess(userInfo))
//     }
// }


const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.error,
  });

  export default connect(mapStateToProps, { login })(Login);

