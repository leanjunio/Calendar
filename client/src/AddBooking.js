import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Axios from 'axios';
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
    }
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeOwner = this.handleChangeOwner.bind(this);
    this.handleChangeRoom = this.handleChangeRoom.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeDate(date) {
    this.setState({
      startDate: date
    });
  }
  handleChangeOwner(e) {
    this.setState({ owner: e.target.value })
  }
  handleChangeRoom(e) {
    this.setState({ room: e.target.value })
  }
  handleSubmit() {
    console.log({
      date: this.state.date,
      owner: this.state.owner,
      room: this.state.room
    })

    Axios.post('http://localhost:8080/calendar', {
      date: this.state.date,
      owner: this.state.owner,
      room: this.state.room
    })
      .then((res) => {
        this.setState({ redirectToHome: true })
        console.log(res)
      })
      .catch ((err) => console.log(err));
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
            <Label for="Date">Date - Time (YYYY-MM-DDT00:00)</Label>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChangeDate}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="YYYY/MM/DD"
              timeCaption="time"
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