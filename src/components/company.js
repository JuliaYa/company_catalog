import React, { Component } from "react";
import { connect } from "react-redux";

class Company extends Component {
  render(){
    const { company } = this.props;
    
    if(!company){
      return (<p>No choosen company yet.</p>)
    }

    return(
      <div className="company">
        <p>{company.type} {company.name}</p>
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