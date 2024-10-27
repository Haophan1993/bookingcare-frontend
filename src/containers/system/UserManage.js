import { Component } from "react";
import './UserManage.scss';

import {getAllUsers} from '../../services/userService';

class UserManage extends Component {
    constructor(props) {
      super(props);
      this.state={
        users:[]
        
      }
      
    }

    async componentDidMount(){
      let response = await getAllUsers('ALL');
      console.log(response.data.users);
      if(response){
            this.setState({
              users: response.data.users
            }, ()=>{

              console.log('current state '+ JSON.stringify(this.state.users))

            })
            
      }

    }
    render() {

      //console.log('current state in render '+ JSON.stringify(this.state.users))
      return (
        <div className="users-container">
            <div className="title text-center">Manage users</div>
            <div className="users-table">
                  <table id="customers">
                    <tr>
                      <th>Email</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Address</th>
                      <th>Actions</th>

                    </tr>
                    <tr>
                      <td>Alfreds Futterkiste</td>
                      <td>Maria Anders</td>
                      <td>Germany</td>
                    </tr>
                    <tr>
                      <td>Berglunds snabbköp</td>
                      <td>Christina Berglund</td>
                      <td>Sweden</td>
                    </tr>
                    <tr>
                      <td>Centro comercial Moctezuma</td>
                      <td>Francisco Chang</td>
                      <td>Mexico</td>
                    </tr>
                    <tr>
                      <td>Ernst Handel</td>
                      <td>Roland Mendel</td>
                      <td>Austria</td>
                    </tr>
                    <tr>
                      <td>Island Trading</td>
                      <td>Helen Bennett</td>
                      <td>UK</td>
                    </tr>
                    <tr>
                      <td>Königlich Essen</td>
                      <td>Philip Cramer</td>
                      <td>Germany</td>
                    </tr>
                    <tr>
                      <td>Laughing Bacchus Winecellars</td>
                      <td>Yoshi Tannamuri</td>
                      <td>Canada</td>
                    </tr>
                    <tr>
                      <td>Magazzini Alimentari Riuniti</td>
                      <td>Giovanni Rovelli</td>
                      <td>Italy</td>
                    </tr>
                    <tr>
                      <td>North/South</td>
                      <td>Simon Crowther</td>
                      <td>UK</td>
                    </tr>
                    <tr>
                      <td>Paris spécialités</td>
                      <td>Marie Bertrand</td>
                      <td>France</td>
                    </tr>
                  </table>
            </div>
          
        </div>
      );
    }
  }

  export default UserManage;