import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props) 

        this.state={
            value:''
        }
        this.handleInput = this.handleInput.bind(this);
    }
    
    handleInput(event) {
        this.setState({
            value:event.target.value
        })
        //console.log(event.target.value)
        this.props.searchHandle(event.target.value)
    }
    render() {
        return (
            <div>
                <input type='text' placeholder='search by Name' value={this.state.value} onChange={this.handleInput}/>
            </div>
        )
    }
}

export default Search;