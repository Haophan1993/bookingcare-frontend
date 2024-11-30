import React, { Component, useState  } from 'react';
import HomeHeader from './HomeHeader';

class HomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <HomeHeader/>
            This is Homepage
            </div>
        )
    }

}

export default HomePage;