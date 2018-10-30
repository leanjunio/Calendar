import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class AddBooking extends Component {
  constructor(props) {
    super(props)

    this.state = {
      startDate: moment(),
      owner: '',
      room: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      startDate: e.target.value
    });
  }
  saveToMongo() {
    
  }
  render() {
    return (
      <Container>
        <Form>
          <FormGroup>
            <Label for="Owner">Owner</Label>
            <Input 
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
              onChange={this.handleChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="LLL"
              timeCaption="time"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Room">Room</Label>
            <Input type="text" name="room" id="idRoom" placeholder="DB4040" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
    )
  }
}

export default AddBooking;