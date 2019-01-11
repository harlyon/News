import React, { Component } from "react";
import Main from "./Main";

class Technology extends Component {
  state = {
    source7: {
      type: "everything",
      query: "q=tech"
    }
  };

  render() {
    return (
      <div>
        <Main articles={this.state.source7} />
      </div>
    );
  }
}

export default Technology;
