import React from 'react';
import { Route } from 'react-router-dom';
import Business from '../pages/Business';

const NRoute = () => {
  return (
    <div>
      <Route exath path ="/" component={Business} />
    </div>
  );
};

export default NRoute;