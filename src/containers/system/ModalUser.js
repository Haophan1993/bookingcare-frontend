import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';
class ModalUser extends Component {

    constructor(props){
        super(props);
        this.state={

        }

    }

    componentDidMount() {
    }

    toggle=()=>{
        this.props.toggleFromParent();

    }




    render() {
        console.log(this.props.isOpen)
        return (
            <Modal isOpen={this.props.isOpen} toggle={()=>{this.toggle()}} className={'abxclassName'}>
          <ModalHeader toggle={()=>{this.toggle()}}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>{this.toggle()}}>Do Something</Button>{' '}
            <Button color="secondary" onClick={()=>{this.toggle()}}>Cancel</Button>
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
