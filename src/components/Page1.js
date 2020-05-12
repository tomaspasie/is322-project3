import React from 'react';
import AccountList from './AccountList';
import Footer from './Footer';

const Page1 = props => {
  return (
    <div className="page-one">
      <AccountList />
      <Footer />
    </div>
  )
}

export default Page1;