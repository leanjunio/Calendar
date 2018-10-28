import React, { Component } from 'react';
import Axios from 'axios';

class App extends Component {
  
  state = {
    bookings: []
  }

  componentDidMount() {
    Axios.get(`http://localhost:8080/calendar`)
      .then(res => {
        const bookings = res.data;
        this.setState({ bookings });
      });
  }

  render() {
    return (
      <div>
        <ul>{ this.state.bookings.map(booking => <li>{booking.name} - {booking.room}</li>)}</ul>
      </div>
    );
  }
}

export default App;
