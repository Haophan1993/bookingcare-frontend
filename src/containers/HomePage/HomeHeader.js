import React, { Component } from 'react';
import './HomeHeader1.scss';
import bars from './images/bars-solid.svg'
import logo from './images/smart-banner.png'
import question from './images/circle-question-solid.svg'
import searchIcon from './images/magnifying-glass-solid.svg'
import logoIcon from './images/Logo.png';

class HomeHeader extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>

            <div className='home-header'>
                <div className='header-left-section'>
                <div className='bar-container'>
                    <img className='bar-icon' src={bars} alt='bar-icon'></img>
                    <img className='logo-icon' src={logoIcon} alt='logo-icon'></img>

                </div>
                </div>
                <div className='header-center-section'>
                    <div className='center-left'>left</div>
                    <div className='center-midle'>midle</div>
                    <div className='center-right'>right</div>
                </div>
                <div className='header-right-section'>Right</div>

                

            </div>
            {/* <div className='home-header-container'>
                <div className='home-header-content'>

                    <div className='left-content'>
                            <img className='bars' src={bars} alt='bars'></img>
                            
                            <img className='header-logo' src={logo} alt='logo'></img>
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
                            <img className='question-mark' src={question} alt='questionIcon' ></img>Ho Tro
                            </div>
                            <div className='flag'>
                                VN
                            </div>
                    </div>
                    

                </div>

            </div>
            <div className='home-header-banner'>

                <div className='content-up'>

                <div className='title1'>
                    Nen Tang Y Te
                </div>
                <div className='title2'>
                    Cham soc suc khoe toan dien
                </div>

                <div className='search'>
                   <div>
                   <img className='searchIcon' src={searchIcon} alt='searchIcon'></img>

                   </div>
                    <div>
                    <input className='input-text' type='text' placeholder='Tim chuyen khoa kham benh'/>

                    </div>
                    

                    
                    
                </div>

                </div>
                <div className='content-down'>
                    <div className='options'>

                    </div>

                </div>
                

                


            </div> */}


            </>
            
        )
    }

}

export default HomeHeader;