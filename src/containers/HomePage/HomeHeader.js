import React, { Component } from 'react';
import './HomeHeader.scss';
import bars from './images/bars-solid.svg'
import logo from './images/smart-banner.png'
import question from './images/circle-question-solid.svg'

class HomeHeader extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(

            <div className='home-header-container'>
                <div className='home-header-content'>

                    <div className='left-content'>
                            <img className='bars' src={bars}></img>
                            
                            <img className='header-logo' src={logo}></img>
                    </div>

                    <div className='center-content'>
                            <div className='child-content'>
                                <div>
                                    <b>Chuyen Khoa</b>
                                </div>
                                <div className='sub-title'>
                                    Tim bac sy theo chuyen khoa
                                </div>
                            </div>
                            <div className='child-content'>
                            <div>
                                    <b>Co So Y Te</b>
                                </div>
                                <div className='sub-title'>
                                    Chon benh vien phong kham
                                </div>
                            </div>
                            <div className='child-content'>
                            <div>
                                    <b>Bac Sy</b>
                                </div>
                                <div className='sub-title'>
                                    Chon bac sy gioi
                                </div>
                            </div>
                            <div className='child-content'>
                            <div>
                                    <b>Goi Kham</b>
                                </div>
                                <div className='sub-title'>
                                    Kham suc khoe tong quat
                                </div>
                            </div>
                    </div>

                    <div className='right-content'>
                            <div className='support'>
                            <img className='question-mark' src={question} ></img>Ho Tro
                            </div>
                            <div className='flag'>
                                VN
                            </div>
                    </div>
                    

                </div>

            </div>
            
        )
    }

}

export default HomeHeader;