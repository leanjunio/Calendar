import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Redirect } from 'react-router-dom';

import 'react-datepicker/dist/react-datepicker.css';

class AddBooking extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment(),
      owner: '',
      room: '',
      redirectToHome: false
    };
  }

  handleChangeDate = (date) => {
    this.setState({ startDate: date }, () => console.log(this.state.startDate));
  }
  handleChangeOwner = (e) => {
    this.setState({ owner: e.target.value })
  }
  handleChangeRoom = (e) => {
    this.setState({ room: e.target.value })
  }
  handleSubmit = () => {

    axios.default.baseURL = 'https://calendar-lean.herokuapp.com/';

    axios.post('/calendar', {
      date: this.state.startDate,
      owner: this.state.owner,
      room: this.state.room
      })
      .then((res) => {
        console.log(`Success: ${res}`)
        this.setState({ redirectToHome: true })
      })
      .catch ((err) => {
        console.log(`An error occured while attempting to send data to db: ${err}`)
      });
  }
  render() {
    if (this.state.redirectToHome) {
      return <Redirect push to="/" />
    }
    
    return (
      <Container>
        <Form>
          <FormGroup>
            <Label for="Owner">Owner</Label>
            <Input
              value={this.state.owner}
              onChange={this.handleChangeOwner}
              type="text"
              name="owner"
              id="idOwner"
              placeholder="John Doe"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Date">Date - Time</Label>
            <DatePicker
              placeholderText="Click to select a date time"
              selected={this.state.startDate}
              onChange={this.handleChangeDate}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={55}
              dateFormat="YYYY/MM/DD"
              locale="en-ca"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Room">Room</Label>
            <Input
              value={this.state.room}
              onChange={this.handleChangeRoom}
              type="text"
              name="room"
              id="idRoom"
              placeholder="DB4040"
            />
          </FormGroup>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
    </Container>
  )}
}

export default AddBooking;