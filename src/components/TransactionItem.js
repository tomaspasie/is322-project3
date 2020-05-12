import React from 'react';
import "./card.css";

const TransactionItem = props => {
  return (
    <li className="list-group-item cardStyle" style={{ textAlign: 'center' }}>
      <strong><u>Transaction #{props.transaction._id}</u></strong>
      &emsp;|&emsp;
      <strong>Account ID:</strong> {props.transaction.accountId}
      &emsp;|&emsp;
      <strong>Description:</strong> {props.transaction.name}
      &emsp;|&emsp;
      <strong>Type:</strong> {props.transaction.type}
      &emsp;|&emsp;
      <strong>Amount:</strong> ${ props.transaction.amount}
    </li>
  )
};

export default TransactionItem;