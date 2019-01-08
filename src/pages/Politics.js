import React, { Component } from 'react';
import Main from './Main';

class Politics extends Component {

  state = {
    source3: {
      type: 'everything',
      query: 'q=politics'
    }
  }

  render() {
    return (
      <div>
         <Main articles = {this.state.source3} />
      </div>
    );
  }
}

export default Politics;