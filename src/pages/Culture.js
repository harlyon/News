import React, { Component } from 'react';
import Main from './Main';

class Culture extends Component {
  state = {
    source8: {
      type: 'everything',
      query: 'q=culture'
    }
  }

  render() {
    return (
      <div>
         <Main articles = {this.state.source8} />
      </div>
    );
  }
}

export default Culture;