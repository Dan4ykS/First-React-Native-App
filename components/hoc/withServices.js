import React from 'react';
import { ServicesConsumer } from '../Context';

const withServices = () => (Component) => {
  
  return (props) => {
    return (
      <ServicesConsumer>
        {(services) => {
          console.log(services)
          return <Component {...props} services={services} />;
        }}
      </ServicesConsumer>
    );
  };
};

export default withServices;
