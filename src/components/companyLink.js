import React, { Component } from "react"

class CompanyLink extends Component {
  render(){
    const { id, name } = this.props.company;

    return (<div className="company-link">
              <a href={'#/company/' + id}>{name}</a>
            </div>)
  }
}

export default CompanyLink;