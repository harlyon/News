import React from 'react';
import { Route } from 'react-router-dom';
import Business from '../pages/Business';
import Topnews from '../pages/Topnews';
import Politics from '../pages/Politics';
import Health from '../pages/Health';
import Travel from '../pages/Travel';
import Science from '../pages/Science';
import Technology from '../pages/Technology';
import Culture from '../pages/Culture';
import Music from '../pages/Music';


const NRoute = () => {
  return (
    <div>
      <Route exact path ="/" component={Topnews} />
      <Route path ="/business" component={Business} />
      <Route path ="/politics" component={Politics} />
      <Route path ="/health" component={Health} />
      <Route path="/travel" component={Travel} />
      <Route path="/science" component={Science} />
      <Route path="/technology" component={Technology} />
      <Route path="/culture" component={Culture} />
      <Route path="/music" component={Music} />
    </div>
  );
};

export default NRoute;