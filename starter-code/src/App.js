import React, { Component } from "react";
import "./App.css";
import CountryDetail from "./components/CountryDetail.js";

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
