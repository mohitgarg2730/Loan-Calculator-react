import React, { Component } from "react";
import Table from 'react-bootstrap/Table'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux';



class RentTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { emi: "" };
  }

  render() {
    const { propertyPrice, downPayment, interest, termLoan, rent, emi, rentIncrement,dispatch} = this.props;
    let totalyearlyRent = (12*rent)

    let yearRent = '';
    let incrementAmount = (totalyearlyRent * rentIncrement) / 100;
  
    incrementAmount = Math.round(incrementAmount);

    const RentDetail = [];
    let totalAmount = 0;
    
    for (var i = 0; i < termLoan; i++) {


      totalyearlyRent = (totalyearlyRent + incrementAmount);
      totalAmount = totalAmount + totalyearlyRent;
  
       RentDetail.push({
        RentYearly: totalyearlyRent,
      });
    

    }
    // console.log(RentDetail);
    dispatch({ 'type': 'TOTAL_RENT_AMOUNT', payload: totalAmount })

    return (
      <div className="">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {

              RentDetail.map((rentList, index) => (

                <tr>
                  <td>{index + 1}</td>
            
                  <td> {rentList.RentYearly} </td>


                </tr>
              ))}
              <tr>
                <td>Total</td>
                <td>{totalAmount}</td>

              </tr>
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
    emi: state.emi,
    totalEmi: state.totalEmi,
    rentIncrement: state.rentIncrement
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(RentTable);