import React, { Component } from "react";
import { connect } from "react-redux";

class CompanyLink extends Component {
  chooseCompany = () => {
    this.props.chooseCompany(this.props.company.id);
  }
  
  render(){
    const { id, name } = this.props.company;

    return (<div className="company-link" onClick={this.chooseCompany}>
              {name}
            </div>)
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    chooseCompany: (id) => dispatch({ type: "CHOOSE_COMPANY", payload: {id} })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyLink);