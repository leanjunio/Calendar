import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Bookings from './Bookings'

class App extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default App;
