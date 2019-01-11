import React, { Component } from "react";
import Main from "./Main";

class Business extends Component {
  state = {
    source1: {
      type: "everything",
      query: "q=business"
    }
  };

  render() {
    return (
      <div>
        <Main articles={this.state.source1} />
      </div>
    );
  }
}

export default Business;
