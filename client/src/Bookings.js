import React, { Component } from 'react'
import { Table } from 'reactstrap';
import Axios from 'axios';

import Booking from './Booking'

class Bookings extends Component {
  state = {
    bookings: []
  }

  componentDidMount() {
    Axios.get(`http://localhost:8080/calendar`)
      .then(res => {
        const bookings = res.data;
        this.setState({ bookings });
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Owner</th>
            <th>Room #</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {this.state.bookings.map(booking => <Booking book={booking} />)}
        </tbody>
      </Table>
    )
  }
}

export default Bookings;