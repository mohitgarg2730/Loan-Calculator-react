import React, { Component } from "react";
import Table from 'react-bootstrap/Table'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux';

class RentDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { monthlyEmi: '', totalEmi: '', principal: '' };
  }
  calculateInterest(p, r, t) {
    let emi;

    r = r / (12 * 100); // one month interest
    t = t * 12; // one month period
    emi = (p * r * Math.pow(1 + r, t)) / (Math.pow(1 + r, t) - 1);

    return (emi + 0.000414);
  }



  render() {
    console.log(this.props);

    const { downPayment, interest, termLoan, rent, rentIncrement ,totalRent} = this.props;
    // let totalRent = (termLoan * 12) * rent;
    
    let ondownPaymentInterest = this.calculateInterest(downPayment, 5, termLoan);
    ondownPaymentInterest = Math.round(ondownPaymentInterest);

    return (
      <div className="mt-5">



        <Table striped bordered hover>
          <tbody>
            <tr><td>Down Payment Interest  :
            </td><td>{!!ondownPaymentInterest &&
              <span> {ondownPaymentInterest} </span>
            }</td> </tr>
          </tbody>
        </Table>
        <Table striped bordered hover>
          <tbody>
          
            <tr><td>Total Rent Paid  {!!termLoan &&

              <span> (in {termLoan} Years ) </span>
            }:</td><td>{!!totalRent &&
              <span> {totalRent} </span>
            }</td> </tr>


          </tbody>
        </Table>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    propertyPrice: state.propertyPrice,
    downPayment: state.downPayment,
    interest: state.interest,
    termLoan: state.termLoan,
    rent: state.rent,
    rentIncrement: state.rentIncrement,
    emi: state.emi,
    totalEmi: state.totalEmi,
    totalRent: state.totalRent
  }
}

export default connect(mapStateToProps)(RentDetails);