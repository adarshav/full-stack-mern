import React from 'react';

class Table extends React.Component {
    constructor() {
        super()
    }
    
    render() {
        return (
            <div>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Priority</th>
                            <th>Message</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {
                            this.props.tableData.map((data) =>{
                            return (
                                <tr key={data.ticket_code}>
                                    <td>{data.ticket_code}</td>
                                    <td>{data.name}</td>
                                    <td>{data.department}</td>
                                    <td>{data.priority}</td>
                                    <td>{data.message}</td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>    
        )
    }
}
export default Table;