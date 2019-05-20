import React, { Component } from 'react';
import axios from 'axios';
import Table from './table';
import Search from './search';
import Form from './form';
import Priority from './priority'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tickets:[],
      filteredTickets:[]
    }
    this.searchHandle = this.searchHandle.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
  }
  // print(input) {
  //   console.log('printing from App', input)
  // }

  componentDidMount() {
    axios.get('http://dct-api-data.herokuapp.com/tickets/?api_key=bdf700508f5c5153').then((response) => {
      let users = response.data;
      this.setState({
        tickets:users,
        filteredTickets:users
      })
      //console.log(this.state.filteredTickets)
    })
  }
  
  searchHandle(input) {
   console.log(input);
    this.setState(prevState => ({
      filteredTickets:prevState.tickets.filter(ticket => 
        ticket.name.toLowerCase().indexOf(input.toLowerCase()) !== -1)
    }))
  }

  handlePriority(priority) {
    //console.log(priority);
    this.setState(prevState => ({
      filteredTickets:prevState.tickets.filter(ticket => 
        ticket.priority === priority)
    }))
  }
  render() {
    return (
      <div className="App">
          <Search  filteredTickets={this.state.filteredTickets } tickets={this.state.tickets} searchHandle = {this.searchHandle}/>
          <Form handleChange={this.handleChange} /><br /><br />
          <Priority handlePriority = {this.handlePriority} />
          <Table tableData = {this.state.filteredTickets} /><br />
          <label>showing entries{this.state.filteredTickets.length} out of {this.state.tickets.length}</label>          
      </div>
    );
  }
}

export default App;

//******************* */
// React Router code
// import React, { Component } from 'react';
// import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
// import Api from './api'
// import Contact from './contact'
// import About from './about'
// import Home from './home'
// import ShowUser from './showUser';
// //npm install create react app (project name) 
// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div className="App" class="container">
//           <br></br>
//           <h1><b>Learning React Router</b></h1>
//           <ul>
//               <li><Link to='./'>Home</Link></li>
//               <li><Link to='/about'>About Us</Link></li>
//               <li><Link to='/contact'>Contact Us</Link></li>
//               <li><Link to='/users'>Users Info</Link></li>
//           </ul>
//           <Switch>
//           {/* //switch is used to render the 404 page [page which does not exist] */}
//           <Route path="/" exact component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/contact" component={Contact} />
//           <Route path="/users" exact component={Api} />
//           <Route path="/users/:id" component={ShowUser} />
//           <Route render={() => {
//             return <h2>404</h2>
//           }} />
//           </Switch>
//         </div>

//       </BrowserRouter>
//     );  
//   }
// }
// export default App;


//*************************************

// import React, { Component } from 'react';
// import { BrowserRouter, Link, Route } from 'react-router-dom'
// import Contact from './contact'
// import Home from './home'
// import About from './about'
// import Api from './api'


// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div className="App">
          
//           <h2>Learning React Router</h2>
//           <ul>
//               <li><Link to='./'>Home</Link></li>
//               <li><Link to='/about'>About Us</Link></li>

//               <li><Link to='/contact'>Contact Us</Link></li>
//               <li><Link to='/users'>Users Info</Link></li>
//           </ul>

//           <Route path="/" exact component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/contact" component={Contact} />
//           <Route path="/users" component={Api} />
//         </div>
//       </BrowserRouter>
//     );  
//   }
// }

// export default App;