import React, { Component } from "react";
import Header from "./Header";
import Home from "./Home";

export class Layout extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );
  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="container">
              <Header />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
