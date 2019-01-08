import React, { Component } from 'react';
import Main from './Main';

class Travel extends Component {
  state = {
    source5: {
      type: 'everything',
      query: 'q=travel'
    }
  }

  render() {
    return (
      <div>
         <Main articles = {this.state.source5} />
      </div>
    );
  }
}

export default Travel;