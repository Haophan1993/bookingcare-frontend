import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';
class ModalUser extends Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            firstName:'',
            lastName:'',
            address:''

        }

    }

    componentDidMount() {

        console.log('Mounting modal')
    }

    toggle=()=>{
        this.props.toggleFromParent();

    }

    handleOnchangeInput=(e, id)=>{
        let copyState={...this.state};
        copyState[id]=e.target.value;
        this.setState({
            ...copyState
        })
        
    }

    checkValideInput=()=>{
        let isValid=true;
        let arrayInput=['email', 'password', 'firstName', 'lastName', 'address' ]
        for(let i=0; i<arrayInput.length;i++){
           if(!this.state[arrayInput[i]]){
            isValid=false;
            alert('missing parameter ' + arrayInput[i]);
            break;
           } 
        }
        return isValid;
    }

    handleAddNewUser = ()=>{
        let isValid = this.checkValideInput();
        
        if(isValid===true){
            
            this.props.createNewUser(this.state);
            
            
        }
        this.setState({
            email:'',
            password:'',
            firstName:'',
            lastName:'',
            address:''
        })
        
        
    }




    render() {
        
        return (
            <Modal isOpen={this.props.isOpen} toggle={()=>{this.toggle()}} className={'modal-user-container'} 
            size='xl' >
          <ModalHeader toggle={()=>{this.toggle()}}>Create a new user</ModalHeader>
          <ModalBody>
           <div className='container'>

                <div className='row'>
                    <div className='col-6 form-group mr-3'>
                        <label className='mr-2'>Email</label>
                        <input type='text' onChange={(e)=>this.handleOnchangeInput(e, 'email')} value={this.state.email}></input>
                        


                    </div>

                    <div className='col-6 form-group'>
                        <label>Password</label>
                        <input type='password' onChange={(e)=>this.handleOnchangeInput(e, 'password')} value={this.state.password}></input>
                        


                    </div>

                    <div className='col-6 form-group'>
                        <label>First Name</label>
                        <input type='text' onChange={(e)=>this.handleOnchangeInput(e, 'firstName')} value={this.state.firstName}></input>
                        


                    </div>

                    <div className='col-6 form-group'>
                        <label>Last Name</label>
                        <input type='text' onChange={(e)=>this.handleOnchangeInput(e, 'lastName')} value={this.state.lastName}></input>
                        


                    </div>

                    <div className='col-12 form-group'>
                        <label>Address</label>
                        <input type='text' style={{width:"100%"}} onChange={(e)=>this.handleOnchangeInput(e, 'address')} value={this.state.address}></input>
                        


                    </div>

                </div>

           </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>{this.handleAddNewUser()}}>Add new</Button>{' '}
            <Button color="secondary" onClick={()=>{this.toggle()}}>Close</Button>
          </ModalFooter>
        </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
