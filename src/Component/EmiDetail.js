import React, { Component } from "react";
import Table from 'react-bootstrap/Table'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux';

class EmiDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { monthlyEmi: '', totalEmi: '', principal: '' };
  }
  calculateEmi(p, r, t) {
    let emi;

    r = r / (12 * 100); // one month interest
    t = t * 12; // one month period
    emi = (p * r * Math.pow(1 + r, t)) / (Math.pow(1 + r, t) - 1);

    return (emi + 0.000414);
  }
  


  render() {
    // console.log(this.props);
    const { propertyPrice, downPayment, interest, termLoan, rent,dispatch } = this.props;

    let totalAmount = (propertyPrice - downPayment);
  
    let emi = this.calculateEmi(totalAmount, interest, termLoan);
    emi = Math.round(emi);
    let totalEmi = (termLoan * 12) * emi;
    let totalInterest = (totalEmi - totalAmount);
    totalInterest = Math.round(totalInterest);
    dispatch({ 'type': 'MONTHLY_EMI', payload: emi })
    dispatch({ 'type': 'TOTAL_EMI', payload: totalEmi })

    return (
      <div className="mt-5">
        <Table  striped bordered hover>
          <tbody>
            <tr><td>Property Price :</td><td>{!!propertyPrice &&
              <span>  {propertyPrice}  </span>
            }</td> </tr>
            <tr><td>Down Payment :</td><td>{!!downPayment &&
              <span>  {downPayment} </span>}  </td> </tr>
            <tr><td>Monthly EMI :</td><td>{!!emi &&
              <span>  {emi} </span>} </td> </tr>
            <tr><td>Total Payment :</td><td>{!!totalEmi &&
              <span>  {totalEmi} </span>} </td> </tr>
            <tr><td>Total Interest Paid :</td><td>{!!totalInterest &&
              <span>  {totalInterest} </span>} </td> </tr>
          </tbody>
        </Table>
      </div>
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
    emi: state.emi,
    totalEmi: state.totalEmi
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmiDetail);