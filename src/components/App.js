import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAccounts, setTransactions } from "../actions";
import PageTabs from './PageTabs';
import Page1 from './Page1';
import Page2 from './Page2';
import VariablePage from "./VariablePage";
import MobilePage1 from './MobilePage1';
import MobilePage2 from './MobilePage2';
import MobileVariablePage from "./MobileVariablePage";

class App extends React.Component {

  state = {
    breakpoint: 'desktop',
    browserWidth: 0
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/accounts')
      .then(response => {
        this.props.setAccounts(response.data);
      });

    axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/transactions')
      .then(response => {
        this.props.setTransactions(response.data);
      });
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  handleResize = () => {
    const browserWidth = window.screen.width;
    let breakpoint = 'desktop';

    if (browserWidth <= 991) {
      breakpoint = 'mobile';
    }

    this.setState({ breakpoint, browserWidth });
  }

  render() {
    if (this.state.breakpoint === 'desktop') {
      return (
        <div>
          <BrowserRouter>
            <PageTabs />
            <div>
              <Route path="/" exact component={Page1} />
              <Route path="/page2" component={Page2} />
              <Route path="/page/:id" component={VariablePage} />
            </div>
          </BrowserRouter>
        </div>
      );
    } else if (this.state.breakpoint === 'mobile') {
      return (
        <div>
          <BrowserRouter>
            <PageTabs />
            <div>
              <Route path="/" exact component={MobilePage1} />
              <Route path="/page2" component={MobilePage2} />
              <Route path="/page/:id" component={MobileVariablePage} />
            </div>
          </BrowserRouter>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    state
  };
}

export default connect(mapStateToProps, { setAccounts, setTransactions })(App);