import React, { Component } from "react";

class Company extends Component {
  render(){
    const { company } = this.props;

    return(
      <div className="company">
        <h2>{company.type} {company.name}</h2>
        <p>ОГРН: {company.ogrn}</p>
        <p>Дата регистрации: {company.registration_date}</p>
      </div>
    )
  }
}

export default Company;