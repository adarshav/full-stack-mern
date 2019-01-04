import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'

class ShowUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user:'',
            loading:true
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`).then((response) => {
            this.setState({
                user:response.data,
                loading:false
            })
        })
    }

    render() {
        //console.log(this.props)
        const { id, email , username} = this.props.location.state //this is object destructuring

        return(
            <div>
                <h2>User Details</h2>
                {
                    this.state.loading
                    ? <p>Fetching data</p>
                    :<div>
                        <p>id: {id}</p>
                        <p>username - {username}</p>
                        <p>Email -- {email}</p>
                        <Link to="/users">back</Link>
                    </div>
                }
            </div>
        )
    }
}
export default ShowUser