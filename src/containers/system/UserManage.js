import { Component } from "react";
import './UserManage.scss';

import {getAllUsers, deleteUserById} from '../../services/userService';
import ModalUser from "./ModalUser";


class UserManage extends Component {
    constructor(props) {
      super(props);
      this.state={
        users:[],
        isOpenModalUser:false
        
      }
      
    }

    async componentDidMount(){
      let response = await getAllUsers('ALL');

      
      if(response){
            this.setState({
              users: response.data.users
            }, ()=>{

              console.log('current state '+ JSON.stringify(this.state.users))

            })
            
      }

    }

    async hanleDelete(userId){
      console.log(userId)
      
      await deleteUserById(userId);

      let response = await getAllUsers('ALL');

      
      if(response){
            this.setState({
              users: response.data.users
            }, ()=>{

              console.log('current state '+ JSON.stringify(this.state.users))

            })
            
      }
      
      
    }

    handleAddNewUser=()=>{
      this.setState({
        isOpenModalUser:true
      })
    }

    toggleUserModal = ()=>{
      this.setState({
        isOpenModalUser: !this.state.isOpenModalUser,
      })
    }
    
    render() {

      //console.log('current state in render '+ JSON.stringify(this.state.users))
      let users= this.state.users;
      return (
        <div className="users-container">
          <ModalUser isOpen={this.state.isOpenModalUser}
                      toggleFromParent={this.toggleUserModal}/>
            <div className="title text-center">Manage users</div>
            <div className="mx-1">
              <button className="btn btn-primary" onClick={()=>this.handleAddNewUser()}>Add new User</button>
            </div>

            <div className="users-table">
                  <table id="customers">
                    <tr>
                      <th>Email</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Address</th>
                      <th>Actions</th>

                    </tr>
                    {users&&users.map((item, index)=>{
                      return(
                        <tr id={item.id}>
                            <td>{item.email}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.address}</td>
                            <td>
                              <button type="button" class="m-2 btn btn-primary">Edit</button>
                              <button type="button" class="m-2 btn btn-primary" onClick={e=>this.hanleDelete(item.id)}>Delete</button>
                            </td>
                      </tr>

                      )

                    })}
                    
                    
                  </table>
            </div>
          
        </div>
      );
    }
  }

  export default UserManage;