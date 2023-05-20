import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import './style.computer-table.scss';

function TableComputer() {
  var accounts = [{
    id: 2,
    type: "type2",
    accountingTime: "14:25",
    moveTime: "14:26",
    amount: 456,
    securitizationOwner: "HC",
    ranks: [{
      rank: "Card",
      value: "Master Card"
  },{
      rank: "Product ID",
      value: "6789"
  }]
  },{
    id: 3,
    type: "type3",
    accountingTime: "15:25",
    moveTime: "15:26",
    amount: 789,
    securitizationOwner: "AB",
    ranks: [{
      rank: "Card",
      value: "VISA"
  },{
      rank: "Product ID",
      value: "12345"
  }]
  },{
    id: 4,
    type: "type1",
    accountingTime: "16:25",
    moveTime: "16:26",
    amount: 1234,
    securitizationOwner: "HomeCredit",
    ranks: [{
      rank: "Card",
      value: "MasterCard"
  },{
      rank: "Product ID",
      value: "6789"
  }]
  },{
    id: 5,
    type: "type5",
    accountingTime: "17:25",
    moveTime: "17:26",
    amount: 12345,
    securitizationOwner: "HomeCredit",
    ranks: [{
      rank: "Card",
      value: "VISA"
  },{
      rank: "Product ID",
      value: "12345"
  }]
  },{
    id: 6,
    type: "type1",
    accountingTime: "13:25",
    moveTime: "13:26",
    amount: 123,
    securitizationOwner: "AirBank"
  },{
    id: 7,
    type: "type2",
    accountingTime: "14:25",
    moveTime: "14:26",
    amount: 456,
    securitizationOwner: "HomeCredit"
  },{
    id: 8,
    type: "type3",
    accountingTime: "15:25",
    moveTime: "15:26",
    amount: 789,
    securitizationOwner: "AirBank"
  },{
    id: 9,
    type: "type1",
    accountingTime: "16:25",
    moveTime: "16:26",
    amount: 1234,
    securitizationOwner: "HomeCredit"
  },{
    id: 10,
    type: "type5",
    accountingTime: "17:25",
    moveTime: "17:26",
    amount: 12345,
    securitizationOwner: "HomeCredit"
  },{
    id: 11,
    type: "type1",
    accountingTime: "13:25",
    moveTime: "13:26",
    amount: 123,
    securitizationOwner: "AirBank"
  },{
    id: 12,
    type: "type2",
    accountingTime: "14:25",
    moveTime: "14:26",
    amount: 456,
    securitizationOwner: "HomeCredit"
  },{
    id: 13,
    type: "type3",
    accountingTime: "15:25",
    moveTime: "15:26",
    amount: 789,
    securitizationOwner: "AirBank"
  },{
    id: 14,
    type: "type1",
    accountingTime: "16:25",
    moveTime: "16:26",
    amount: 1234,
    securitizationOwner: "HomeCredit"
  },{
    id: 15,
    type: "type5",
    accountingTime: "17:25",
    moveTime: "17:26",
    amount: 12345,
    securitizationOwner: "HomeCredit"
  },{
    id: 16,
    type: "type1",
    accountingTime: "13:25",
    moveTime: "13:26",
    amount: 123,
    securitizationOwner: "AirBank"
  },{
    id: 17,
    type: "type2",
    accountingTime: "14:25",
    moveTime: "14:26",
    amount: 456,
    securitizationOwner: "HomeCredit"
  },{
    id: 18,
    type: "type3",
    accountingTime: "15:25",
    moveTime: "15:26",
    amount: 789,
    securitizationOwner: "AirBank"
  },{
    id: 19,
    type: "type1",
    accountingTime: "16:25",
    moveTime: "16:26",
    amount: 1234,
    securitizationOwner: "HomeCredit"
  },{
    id: 20,
    type: "type5",
    accountingTime: "17:25",
    moveTime: "17:26",
    amount: 12345,
    securitizationOwner: "HomeCredit"
  },{
    id: 21,
    type: "type1",
    accountingTime: "13:25",
    moveTime: "13:26",
    amount: 123,
    securitizationOwner: "AirBank"
  },{
    id: 22,
    type: "type2",
    accountingTime: "14:25",
    moveTime: "14:26",
    amount: 456,
    securitizationOwner: "HomeCredit"
  },{
    id: 23,
    type: "type3",
    accountingTime: "15:25",
    moveTime: "15:26",
    amount: 789,
    securitizationOwner: "AirBank"
  },{
    id: 24,
    type: "type1",
    accountingTime: "16:25",
    moveTime: "16:26",
    amount: 1234,
    securitizationOwner: "HomeCredit"
  },{
    id: 25,
    type: "type5",
    accountingTime: "17:25",
    moveTime: "17:26",
    amount: 12345,
    securitizationOwner: "HomeCredit"
  },{
    id: 26,
    type: "type1",
    accountingTime: "13:25",
    moveTime: "13:26",
    amount: 123,
    securitizationOwner: "AirBank"
  },{
    id: 27,
    type: "type2",
    accountingTime: "14:25",
    moveTime: "14:26",
    amount: 456,
    securitizationOwner: "HomeCredit"
  },{
    id: 28,
    type: "type3",
    accountingTime: "15:25",
    moveTime: "15:26",
    amount: 789,
    securitizationOwner: "AirBank"
  },{
    id: 29,
    type: "type1",
    accountingTime: "16:25",
    moveTime: "16:26",
    amount: 1234,
    securitizationOwner: "HomeCredit"
  },{
    id: 30,
    type: "type5",
    accountingTime: "17:25",
    moveTime: "17:26",
    amount: 12345,
    securitizationOwner: "HomeCredit"
  },{
    id: 31,
    type: "type1",
    accountingTime: "13:25",
    moveTime: "13:26",
    amount: 123,
    securitizationOwner: "AirBank"
  },{
    id: 32,
    type: "type2",
    accountingTime: "14:25",
    moveTime: "14:26",
    amount: 456,
    securitizationOwner: "HomeCredit"
  },{
    id: 33,
    type: "type3",
    accountingTime: "15:25",
    moveTime: "15:26",
    amount: 789,
    securitizationOwner: "AirBank"
  },{
    id: 34,
    type: "type1",
    accountingTime: "16:25",
    moveTime: "16:26",
    amount: 1234,
    securitizationOwner: "HomeCredit"
  },{
    id: 35,
    type: "type5",
    accountingTime: "17:25",
    moveTime: "17:26",
    amount: 12345,
    securitizationOwner: "HomeCredit"
  },{
    id: 36,
    type: "type1",
    accountingTime: "13:25",
    moveTime: "13:26",
    amount: 123,
    securitizationOwner: "AirBank"
  },{
    id: 37,
    type: "type2",
    accountingTime: "14:25",
    moveTime: "14:26",
    amount: 456,
    securitizationOwner: "HomeCredit"
  },{
    id: 38,
    type: "type3",
    accountingTime: "15:25",
    moveTime: "15:26",
    amount: 789,
    securitizationOwner: "AirBank"
  },{
    id: 39,
    type: "type1",
    accountingTime: "16:25",
    moveTime: "16:26",
    amount: 1234,
    securitizationOwner: "HomeCredit"
  },{
    id: 40,
    type: "type5",
    accountingTime: "17:25",
    moveTime: "17:26",
    amount: 12345,
    securitizationOwner: "HomeCredit"
  },{
    id: 41,
    type: "type1",
    accountingTime: "13:25",
    moveTime: "13:26",
    amount: 123,
    securitizationOwner: "AirBank"
  },{
    id: 42,
    type: "type2",
    accountingTime: "14:25",
    moveTime: "14:26",
    amount: 456,
    securitizationOwner: "HomeCredit"
  },{
    id: 43,
    type: "type3",
    accountingTime: "15:25",
    moveTime: "15:26",
    amount: 789,
    securitizationOwner: "AirBank"
  },{
    id: 44,
    type: "type1",
    accountingTime: "16:25",
    moveTime: "16:26",
    amount: 1234,
    securitizationOwner: "HomeCredit"
  },{
    id: 45,
    type: "type5",
    accountingTime: "17:25",
    moveTime: "17:26",
    amount: 12345,
    securitizationOwner: "HomeCredit"
  },{
    id: 46,
    type: "type1",
    accountingTime: "13:25",
    moveTime: "13:26",
    amount: 123,
    securitizationOwner: "AirBank"
  },{
    id: 47,
    type: "type2",
    accountingTime: "14:25",
    moveTime: "14:26",
    amount: 456,
    securitizationOwner: "HomeCredit"
  },{
    id: 48,
    type: "type3",
    accountingTime: "15:25",
    moveTime: "15:26",
    amount: 789,
    securitizationOwner: "AirBank"
  },{
    id: 49,
    type: "type1",
    accountingTime: "16:25",
    moveTime: "16:26",
    amount: 1234,
    securitizationOwner: "HomeCredit"
  },{
    id: 50,
    type: "type5",
    accountingTime: "17:25",
    moveTime: "17:26",
    amount: 12345,
    securitizationOwner: "HomeCredit"
  },{
    id: 51,
    type: "type5",
    accountingTime: "17:25",
    moveTime: "17:26",
    amount: 12345,
    securitizationOwner: "HomeCredit"
  }];
  return (
    <div>
    <BootstrapTable data={accounts} striped hover condensed pagination={true} search >
      <TableHeaderColumn dataField="id" isKey dataAlign="center" width="50" dataSort>ID </TableHeaderColumn>   
      <TableHeaderColumn dataField="type" dataAlign="center" filterFormatted dataSort>Type</TableHeaderColumn>
      <TableHeaderColumn dataField="accountingTime" dataAlign="center" dataSort>Accounting Time</TableHeaderColumn>
      <TableHeaderColumn dataField="moveTime" dataAlign="center" dataSort>Move Time</TableHeaderColumn>
      <TableHeaderColumn dataField="amount" dataAlign="center" dataSort>Amount</TableHeaderColumn>
      <TableHeaderColumn dataField="securitizationOwner" dataAlign="center" dataSort>Securitization Owner</TableHeaderColumn>
    </BootstrapTable>
  </div>  )
}

export default TableComputer