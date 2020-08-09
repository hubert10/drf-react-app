import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewCandidateForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    email: "",
    document: "",
    phone: "",
    address: "",
  };

  componentDidMount() {
    if (this.props.candidate) {
      const {
        pk,
        name,
        document,
        email,
        phone,
        address,
      } = this.props.candidate;
      this.setState({ pk, name, document, email, phone, address });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createCandidate = (e) => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };
  editCandidate = (e) => {
    e.preventDefault();
    axios.put(API_URL + `${this.state.pk}`, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form
        onSubmit={
          this.props.candidate ? this.editCandidate : this.createCandidate
        }
      >
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="document">Document:</Label>
          <Input
            type="text"
            name="document"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.document)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone:</Label>
          <Input
            type="text"
            name="phone"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.phone)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address:</Label>
          <Input
            type="text"
            name="address"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.address)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewCandidateForm;
