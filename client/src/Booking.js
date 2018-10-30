import React, { Component } from 'react';
import Moment from 'react-moment';

class Booking extends Component {
  constructor(props) {
    super(props)

    this.state = {
      room: '',
      owner: '',
      date: ''
    }
  }

  componentDidMount() {
    this.setState({
      room: this.props.book.room,
      owner: this.props.book.owner,
      date: this.props.book.date
    })
  }

  render() {
    return (
      <tr>
        <td>{this.state.owner}</td>
        <td>{this.state.room}</td>
        <td>
          <Moment format="dddd, MMMM Do YYYY, h:mm a">{this.state.date}</Moment>
        </td>
      </tr>
    )
  }
}

export default Booking;