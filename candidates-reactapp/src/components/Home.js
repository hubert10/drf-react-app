import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CandidateList from "./CandidateList";
import NewCandidateModal from "./NewCandidateModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    candidates: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getcandidates = () => {
    axios.get(API_URL).then((res) => this.setState({ candidates: res.data }));
  };

  resetState = () => {
    this.getcandidates();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <CandidateList
              candidates={this.state.candidates}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewCandidateModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
