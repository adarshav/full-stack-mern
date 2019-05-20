import React from 'react';
//import axios from'axios';

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name:'',
            department:'',
            priority:'',
            message:''

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    
    handleSubmit(event) {   
        event.preventDefault();
        const formData = {
            name:this.state.name,
            department:this.state.department,
            priority:this.state.priority,
            message:this.state.message
        }
        //console.log(formData);
    }

    // addNewTicket(formData) {
    //     console.log(formData);
    // }
    // handleDisplay() {
    //     this.props.print('from form');
    // }
    render() {
        return (
            <div>
                {/* <button onClick={this.handleDisplay}>Click me</button> */}
                <h2>Add Ticket</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name: <input type='text' value={this.state.name} name='name' onChange={this.handleChange}/>
                    </label><br />
                    <label>
                        Department: <input type='text' value={this.state.department} name='department' onChange={this.handleChange} />
                    </label><br />
                        <label>
                            Priority:  High<input type='radio' value='high' name='priority' onChange={this.handleChange} />
                                        Medium<input type='radio' value='medium' name='priority' onChange={this.handleChange} />
                                        Low <input type="radio" value='low' name='priority' onChange={this.handleChange}/>
                        </label><br />
                    <label>Message : <textarea value={this.state.message} name='message' onChange={this.handleChange}></textarea></label>
                    <br />

                    <input type='submit' value='submit' />
                </form>
            </div>
        )
    }
}

export default Form
