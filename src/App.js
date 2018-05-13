import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import CompaniesList from "./components/companiesList";
import ShowCompany from "./components/show";
import EditCompany from "./components/editCompany";
import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="main">
        <header>
          <h1 className="title">Companies list</h1>
        </header>
        <HashRouter>
          <div className="app">
            <section className="content">
              <Route path="/" exact component={CompaniesList}/>
              <Route path="/company/:id" exact component={ShowCompany}/>
              <Route path="/company/edit/:id" exact component={EditCompany}/>
            </section>
          </div>
        </HashRouter>
        {this.props.children}
      </div>
    );
  }
}

export default App;
