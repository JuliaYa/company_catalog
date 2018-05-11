import React, { Component } from "react"
import { connect } from "react-redux"

import actionTypes from '../constants'

class CompanyLink extends Component {
  chooseCompany = () => {
    this.props.chooseCompany(this.props.company.id);
  }
  
  render(){
    const { id, name } = this.props.company;

    return (<div className="company-link" onClick={this.chooseCompany}>
              <a href={'#/company/' + id}>{name}</a>
            </div>)
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    chooseCompany: (id) => dispatch({ type: actionTypes.CHOOSE_COMPANY, payload: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyLink);