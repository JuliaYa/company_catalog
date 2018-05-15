import React, { Component } from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"

import actionTypes from "../constants"
import Company from "./company"

class ShowCompany extends Component {
  componentDidMount(){
    const id = this.props.location.pathname.split('/')[2]
    this.props.fetchCompany(id) //get data
  };
  
  render(){
    const { fetching, company, error } = this.props
    
    if(!company || fetching){
      return <p>Loading...</p>
    }

    if (error){
     return <p style={{ color: "red" }}>Sorry, something went wrong!</p>
    }

    const editUrl = `/company/edit/${company.id}`
    return(
      <div>
        <NavLink to="/">Back</NavLink>
        &nbsp;
        <NavLink to={editUrl}>Edit</NavLink>
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
    fetchCompany: (id) => dispatch({ type: actionTypes.FETCH_COMPANY, payload: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowCompany);