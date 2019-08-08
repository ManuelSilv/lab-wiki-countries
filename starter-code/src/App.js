import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav.js";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

class App extends Component {
  render() {
    return (
      <div>
        <switch>
          <div>
            <Nav />
            <CountryDetail />
          </div>
        </switch>
      </div>
    );
  }
}

export default App;
