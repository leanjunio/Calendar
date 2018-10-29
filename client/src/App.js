import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import Bookings from './Bookings'

class App extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <Navbar color="light" light expand="md">    
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/bookings">Bookings</Link>
              </li>
            </ul>
            <hr />
            <Route path="/bookings" component={Bookings} />
          </div>
        </Router>
      </Navbar>
      
    );
  }
}

export default App;
