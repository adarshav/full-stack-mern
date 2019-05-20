import React from 'react';

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            item:'',
            price:'',
            quantity:''
        }
    }

    render() {
        return(
            <div>
                <h2>Billing Side</h2>

            </div>
        ) 
    }
}
export default Form;