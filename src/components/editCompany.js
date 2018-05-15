import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import actionTypes from "../constants"
import CompanyForm from "./companyForm"
import Company from "./company"

class EditCompany extends Component {
  componentDidMount(){
    const id = this.props.location.pathname.split('/')[3];
    this.props.fetchCompany(id); //get data
  };

  saveData = (values) => {
    let updCompany = values;
    updCompany.id = this.props.company.id
    console.log(values)
    this.props.updateCompany(updCompany)
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
        <CompanyForm onSubmit={this.saveData} initialValues={company}/>
        <h3>Company card view</h3>
        <Company company={company} />
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
    fetchCompany: (id) => dispatch({ type: actionTypes.FETCH_COMPANY, payload: id }),
    updateCompany: (company) => dispatch({ type: actionTypes.UPDATE_COMPANY, payload: company})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCompany);