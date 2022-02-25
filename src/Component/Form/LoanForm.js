import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux';

class LoanForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loanTerm: 5 };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const { dispatch } = this.props;

    dispatch({ 'type': name, payload: value })
  }

  handleSlideChange = (event) => {
    const { value } = event.target;
    const { dispatch } = this.props;

    this.setState({ loanTerm: value });

    dispatch({ 'type': 'TERM_LOAN', payload: value })
  }

  render() {
    return (
      <Form>
        <Form.Group className="mb-3 row" controlId="formBasicEmail">
          <Form.Label className="col-sm-6">Price OF Property</Form.Label>
          <div className="col-sm-6" >
            <Form.Control type="text" placeholder="Enter Price Property" onChange={this.handleInputChange} name="PROPERTY_PRICE" />
          </div>
        </Form.Group>

        <Form.Group className="mb-3 row" controlId="formBasicEmail">
          <Form.Label className="col-sm-6">Down Payment</Form.Label>
          <div className="col-sm-6" >
            <Form.Control type="text" placeholder="Enter Down Payment" onChange={this.handleInputChange} name="DOWN_PAYMENT" />
          </div>
        </Form.Group>
        <Form.Group className="mb-3 row" controlId="formBasicPassword">
          <Form.Label className="col-sm-6">Rate Interest</Form.Label>
          <div className="col-sm-6" >
            <Form.Control type="text" placeholder="Enter Interest" onChange={this.handleInputChange} name="INTEREST" />
          </div>
        </Form.Group>

        <Form.Group className="mb-3 row" controlId="formBasicPassword">
          <Form.Label className="col-sm-6">Term of Loan in Years  ({this.state.loanTerm})</Form.Label>
          <div className="col-sm-6" >
            <Form.Range onChange={this.handleSlideChange} name="TERM_LOAN" min="1" max="30" value={this.state.loanTerm} />
          </div>
          {/* <Form.Control type="range" placeholder="Enter Loan Term" /> */}
        </Form.Group>
        <Form.Group className="mb-3 row" controlId="formBasicPassword">
          <Form.Label className="col-sm-6">Rent Cuurent</Form.Label>
          <div className="col-sm-6" >
            <Form.Control type="text" placeholder="Rent Current" onChange={this.handleInputChange} name="RENT" />
          </div>
        </Form.Group>
        <Form.Group className="mb-3 row" controlId="formBasicPassword">
          <Form.Label className="col-sm-6">Rent Increment </Form.Label>
          <div className="col-sm-6" >
            <Form.Control type="text" placeholder="Rent Increment" onChange={this.handleInputChange} name="RENT_INCREMENT" />
          </div>
        </Form.Group>
        {/* <Button variant="primary" onClick={this.handleSubmit} >calulate</Button> */}
      </Form>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}
const mapStateToProps = (state) => {
  return {
    propertyPrice: state.propertyPrice,
    downPayment: state.downPayment,
    interest: state.interest,
    termLoan: state.termLoan,
    rent: state.rent,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoanForm);