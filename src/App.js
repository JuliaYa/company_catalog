import React, { Component } from "react";
import CompaniesList from "./components/companiesList"
import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="main">
        <header>
          <h1 className="title">Companies list</h1>
        </header>
        <CompaniesList />
      </div>
    );
  }
}

export default App;
