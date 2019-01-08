import React, { Component } from 'react';
import Main from './Main';

class Music extends Component {
  state = {
    source9: {
      type: 'everything',
      query: 'q=music'
    }
  }

  render() {
    return (
      <div>
         <Main articles = {this.state.source9} />
      </div>
    );
  }
}

export default Music;