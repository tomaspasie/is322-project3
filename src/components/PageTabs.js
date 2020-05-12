import React from 'react';
import { Link } from 'react-router-dom';

class PageTabs extends React.Component {
  state = { currentPage: '/' }

  isActiveTab(tabName) {
    return (tabName === this.state.currentPage) ? 'nav-link active' : 'nav-link';
  }

  onTabClick(event, tabName) {
    this.setState({ currentPage: tabName })
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">
          Banking App
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul class="navbar-nav mr-auto" style={{ textAlign: 'center' }}>
            <li class="nav-item">
              <Link className={this.isActiveTab('/')} to="/" onClick={event => this.onTabClick(event, '/')}>
                Accounts
                </Link>
            </li>

            <li class="nav-item">
              <Link className={this.isActiveTab('/page2')} to="/page2" onClick={event => this.onTabClick(event, '/page2')}>
                Transactions
                </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }

};

export default PageTabs;