import React, { Component } from 'react';
import { BrowserRouter, Link, Route} from 'react-router-dom'
import Home from './home'
import About from './about'
import Form from './form'
// import Users from './users'
//import ShowUsers from './showUsers'
class App extends Component {
  render() {
    return (
      
        <BrowserRouter>
          <div>
            <h1>Practicing React Router</h1>
            <br />
            <ul>
              <li><Link to='./'>Home</Link></li>
              <li> <Link to='./about'>About</Link></li>
              {/* <li><Link to ='./users'>usersInfo</Link></li> */}
      
            </ul>
            <Form />

            <Route path="/" component= { Home } exact />
            <Route path="/about" component = {About} />
            {/* <Route path="/users" component = {Users} /> */}
            {/* <Route path="/users/:id" component={ShowUsers} /> */}
          </div>
        </BrowserRouter>

    );
  }
}

export default App;
