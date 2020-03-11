import React from 'react';
import { ServicesConsumer } from '../Context';

const withServices = () => (Component) => {
  
  return (props) => {
    return (
      <ServicesConsumer>
        {(services) => {
          return <Component {...props} services={services} />;
        }}
      </ServicesConsumer>
    );
  };
};

export default withServices;
