import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


class ShowUsers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users:[]
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`).then(response => {
            users:response.data
        })
    }
    render() {
        const { id, username, name, email} = this.props.location.state;

        return (
            <div>
                <h2>User Details</h2>

                <p>id: {id}</p>
                <p>name: {name}</p>
                <p>username: {username}</p>
                <p>email:{email}</p>
                <Link to='/users'>Back</Link>
            </div>
        ) 
    }
}
export default ShowUsers;