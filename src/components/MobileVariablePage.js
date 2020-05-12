import React from 'react';
import axios from 'axios';
import Footer from './Footer';
import MobileTransactionItem from './MobileTransactionItem';
import { connect } from 'react-redux';
import { deleteAccount, editAccount, deposit, withdraw, deposit2, withdraw2 } from '../actions';
import './account.css';
var transactionId = 25;

class MobileVariablePage extends React.Component {

  state = {
    currentPage: '/',
    account: [],
    transactions: [],
    editAccountName: '',
    transactionType: '',
    amount: 0,
    accountId: 0,
    type: "",
    name: ""
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const ID = this.props.match.params.id;

    axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/accounts')
      .then(response => {
        this.setState({ account: response.data[ID - 1] });
      });

    axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/transactions')
      .then(response => {

        var transactionArray = [];

        for (var i = 0; i < response.data.length; i++) {
          // eslint-disable-next-line 
          if (response.data[i].accountId == this.props.match.params.id) {
            transactionArray.push(response.data[i]);

          }
        }

        this.setState({ transactions: transactionArray });

      });
  }

  goToHome = () => {
    this.props.history.push(`/`);
  }

  goToHomeAndDelete = () => {
    this.props.deleteAccount(this.props.match.params.id);
    this.props.history.push(`/`);
  }

  onEditSubmit = (event) => {
    event.preventDefault();

    if (this.state.editAccountName === '') {
      this.setState({ editAccountName: '' });
    } else {
      this.props.editAccount(this.state.editAccountName, this.props.match.params.id);
      this.setState({ editAccountName: '' });
      this.props.history.push(`/`);
    }

  }

  onTransactionSubmit = (event) => {
    event.preventDefault();

    if (this.state.amount === 0) {
      this.setState({ amount: 0 });
    } else {

      if (this.state.transactionType === 'DEPOSIT') {
        this.props.deposit(this.state.amount, this.props.match.params.id);
        this.props.deposit2(transactionId, this.props.match.params.id, this.state.amount);
        this.setState({ amount: 0 });
      } else if (this.state.transactionType === 'WITHDRAW') {
        this.props.withdraw(this.state.amount, this.props.match.params.id);
        this.props.withdraw2(transactionId, this.props.match.params.id, this.state.amount);
        this.setState({ amount: 0 });
      }

      transactionId++;
      this.props.history.push(`/`);

    }

  }

  render() {

    const transactions = this.state.transactions.map(transaction => {
      return (
        <MobileTransactionItem transaction={transaction} />
      );
    });

    return (
      <div id='transaction' className="page-variable" style={{ textAlign: 'center' }}>
        <h1>Account #{this.props.match.params.id}</h1>
        <hr></hr>
        <h3>Name: {this.state.account.name}</h3>
        <h3>Current Balance: ${this.state.account.balance}</h3>
        <hr></hr>

        <form onSubmit={this.onTransactionSubmit}>
          <label><strong>Deposit/Withdraw Money:</strong></label><br></br>
          <input type="text" onChange={event => this.setState({ amount: event.target.value })} /><br></br>
          <button type="submit" id="back" class="btn btn-success" onClick={event => this.setState({ transactionType: "DEPOSIT" })}>Deposit</button>
            &emsp;
            <button type="submit" id="back" class="btn btn-danger" onClick={event => this.setState({ transactionType: "WITHDRAW" })}>Withdraw</button>
        </form>

        <hr></hr>

        <form id='edit' onSubmit={this.onEditSubmit}>
          <div className="form-group">
            <label><strong>Edit Account Name:</strong></label><br></br>
            <input type="text" onChange={event => this.setState({ editAccountName: event.target.value })} />
          </div>
          <input type="submit" class="btn btn-secondary" value={'Edit'} />
        </form>

        <hr></hr>

        <button id="back" onClick={this.goToHome} class="btn btn-primary">Go Back</button>
          &emsp;
        <button id="back" onClick={this.goToHomeAndDelete} class="btn btn-danger">Delete Account</button>

        <br></br><br></br>
        {transactions}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  };
}

export default connect(mapStateToProps, { deleteAccount, editAccount, deposit, withdraw, deposit2, withdraw2 })(MobileVariablePage);