import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import actionTypes from "../constants"
import CompanyForm from "./companyForm"

class EditCompany extends Component {
  componentDidMount(){
    const id = this.props.location.pathname.split('/')[3];
    this.props.fetchCompany(id); //get data
  };

  saveData = (values) => {
    console.log(values)
  };
  
  render(){
    const { fetching, company, error } = this.props;
    
    if(!company || fetching){
      return <p>Loading...</p>
    }

    if (error){
     return <p style={{ color: "red" }}>Sorry, something went wrong!</p>
    }

    const backUrl = `/company/${company.id}`
    return(
      <div>
        <NavLink to={backUrl}>Back</NavLink>
        <h2>Edit company</h2>
        <CompanyForm onSubmit={this.saveData}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.mainReducer.fetching,
    error: state.mainReducer.error,
    company: state.mainReducer.company
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCompany: (id) => dispatch({ type: actionTypes.FETCH_COMPANY, payload: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCompany);