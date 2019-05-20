import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Users extends React.Component {
    constructor() {
        super()
        
        this.state = {
            users:[]
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            this.setState({
                users:response.data
            })
        })
    }
    render() {
        return(
            <div>
                <hr></hr>
                <h2>Listing Users {this.state.users.length}</h2>

                <ul>
                    {
                        this.state.users.map(user => {
                            return <li key={user.componentDidMount}> <Link to={{
                                pathname:`/users/${user.id}`,
                                state:{
                                    id:user.id,
                                    name:user.name,
                                    email:user.email,
                                    username:user.username
                                }
                            }}>{user.name}</Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Users;