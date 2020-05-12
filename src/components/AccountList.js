import React from 'react';
import { connect } from 'react-redux';
import AccountItem from './AccountItem';
import "./card.css";

class AccountList extends React.Component {

  render() {
    const accountList = this.props.accounts.map(account => {
      return <AccountItem account={account} />
    });

    return (
      <div class="card">
        <div class="card-header"><h3 style={{ textAlign: "center" }}>All Accounts</h3></div>
        <ul class="list-group list-group-flush">
          {accountList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts
  };
}

export default connect(mapStateToProps)(AccountList);