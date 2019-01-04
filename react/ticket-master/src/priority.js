import React from 'react';

class Priority extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            value:''
        }

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        this.props.handlePriority(event.target.value);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} value="high">High</button>
                <button onClick={this.handleClick} value="medium">Medium</button>
                <button onClick={this.handleClick} value="low">Low</button>
            </div>
        )
    }
}
export default Priority;