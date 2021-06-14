import React, { Component } from "react";
import Header from "./Header";

export class Layout extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );
  render() {
    return (
      <div>
        <div id="wrapper">
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Header />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
