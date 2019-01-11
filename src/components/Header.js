import React from "react";

const Header = () => {
  return (
    <div>
      <div className="jumbotron p-3 p-md-5 text-white rounded">
        <div className="col-md-6 px-0 container">
          <h1
            className="display-4 font-italic"
            style={{ color: "#fff", fontWeight: "bold" }}
          >
            Top News Headlines
          </h1>
          <p className="lead my-3" />
        </div>
      </div>
    </div>
  );
};

export default Header;
