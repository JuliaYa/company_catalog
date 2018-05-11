import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Company extends Component {
  render(){
    const { company } = this.props;
    
    if(!company){
      return (<p>No choosen company yet.</p>)
    }

    return(
      <div className="company">
        <NavLink to="">Back</NavLink>
        <h2>{company.type} {company.name}</h2>
        <p>ОГРН: {company.ogrn}</p>
        <p>Дата регистрации: {company.registration_date}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    company: state.choosen_company
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Company);