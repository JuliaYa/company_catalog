
import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";

class App extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.onRequest(); //get data
  }
  renderCompanies(companies){
    if(companies.length == 0){
      return <p>No companies yet</p>
    }
    return companies.map(company => {
      return <div className="company-link" key={company.id}>{company.name}</div>
    });
  }
  
  render() {
    const { fetching, companies, onRequest, error } = this.props;
    console.log(this.props);
    return (
      <div className="main">
        <header>
          <h1 className="title">Companies list</h1>
        </header>

        <div className="companies-list">
        {companies ? this.renderCompanies(companies) : ''}
        </div>

        {fetching ? (<div>Loading...</div>) : ''}

        {error && <p style={{ color: "red" }}>Sorry, something went wrong!</p>}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    companies: state.companies,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequest: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
