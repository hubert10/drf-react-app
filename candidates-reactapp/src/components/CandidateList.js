import React, { Component } from "react";
import { Table } from "reactstrap";
import NewCandidateModal from "./NewCandidateModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class CandidateList extends Component {
  render() {
    const candidates = this.props.candidates;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Document</th>
            <th>Phone</th>
            <th>Registration</th>
            <th>Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!candidates || candidates.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            candidates.map((Candidate) => (
              <tr key={Candidate.pk}>
                <td>{Candidate.name}</td>
                <td>{Candidate.email}</td>
                <td>{Candidate.document}</td>
                <td>{Candidate.phone}</td>
                <td>{Candidate.application_date}</td>
                <td>{Candidate.address}</td>
                <td align="center">
                  <NewCandidateModal
                    create={false}
                    Candidate={Candidate}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={Candidate.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default CandidateList;
