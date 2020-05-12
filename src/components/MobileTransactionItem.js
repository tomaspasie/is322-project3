import React from 'react';
import "./card.css";

const MobileTransactionItem = props => {
  return (
    <li className="list-group-item cardStyle" style={{ textAlign: 'center' }}>
      <strong><u>Transaction #{props.transaction._id}</u></strong>
      <br></br>
      <strong>Account ID:</strong> {props.transaction.accountId}
      <br></br>
      <strong>Description:</strong> {props.transaction.name}
      <br></br>
      <strong>Type:</strong> {props.transaction.type}
      <br></br>
      <strong>Amount:</strong> ${ props.transaction.amount}
    </li>
  )
};

export default MobileTransactionItem;