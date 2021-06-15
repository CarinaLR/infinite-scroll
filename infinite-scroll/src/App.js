import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout/Layout";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Layout />
      </div>
    </Router>
  );
}
