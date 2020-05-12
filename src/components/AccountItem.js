import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import "./card.css";
import './account.css';

class AccountItem extends React.Component {

  state = { currentPage: '/' }

  isActiveTab(tabName) {
    return (tabName === this.state.currentPage) ? 'nav-link active' : 'nav-link';
  }

  onTabClick(event, tabName) {
    this.setState({ currentPage: tabName })
  }

  render(){
    return (
      <li id= "account" className="list-group-item cardStyle" style={{textAlign: 'center'}}>
        <strong><u>Account #{this.props.account._id}</u></strong>
        &emsp;|&emsp;
        <strong>Name:</strong> {this.props.account.name}
        &emsp;|&emsp;
        <strong>Current Balance:</strong> ${this.props.account.balance}
        <Link className={this.isActiveTab('/page/:id')} to={"/page/"+ this.props.account._id} onClick={event => this.onTabClick(event, '/page/:id')}>
          <button type="button" class="btn btn-primary btn-sm">See More</button>
        </Link>
      </li>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    state
  };
}

export default connect(mapStateToProps)(AccountItem);