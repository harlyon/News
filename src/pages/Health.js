import React, { Component } from "react";
import Main from "./Main";

class Health extends Component {
  state = {
    source4: {
      type: "everything",
      query: "q=health"
    }
  };

  render() {
    return (
      <div>
        <Main articles={this.state.source4} />
      </div>
    );
  }
}

export default Health;
