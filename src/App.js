import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import BinDetails from './components/bins/BinDetails'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateBin from './components/bins/CreateBin';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/bin/:id' component={BinDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component ={CreateBin}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;