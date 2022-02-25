import React, { Component } from "react";
import Table from 'react-bootstrap/Table'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux';



class EmiTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { emi: "" };
  }

  render() {
    const { propertyPrice, downPayment, interest, termLoan, rent, emi } = this.props;
    let totalMonthEmi = (termLoan * 12);
    let totalAmount = (propertyPrice - downPayment);
    let totalEmi = (termLoan * 12) * emi;
    const emiValues = [];
    for (var i = 0; i < totalMonthEmi; i++) {

      emiValues.push({
        emi: totalEmi,
      });
      totalEmi = totalEmi - emi;

    }


    return (
      <div className="">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>EMI </th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {

              emiValues.map((emilist, index) => (
                
                <tr>
                  <td>{index + 1}</td>
                  <td>{!!emi &&
                    <span>  {emi} </span>} </td>
                  <td>{!!emilist.emi &&
                    <span>  {emilist.emi} </span>} </td>
              

                </tr>
              ))}
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
    totalEmi: state.totalEmi
  }
}

export default connect(mapStateToProps)(EmiTable);