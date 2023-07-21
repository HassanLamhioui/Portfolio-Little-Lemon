import React from 'react'
import CallToAction from './CallToAction.jsx';
import Specials from './Specials.jsx';
import CustomersSay from './CustomersSay.jsx';
import Chicago from './Chicago.jsx';

const HomePage = () => {
    return (
      <div>
        <CallToAction />
        <Specials />
        <CustomersSay />
        <Chicago />
      </div>
    );
  };

export default HomePage