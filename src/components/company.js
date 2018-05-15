import React, { Component } from "react"
import moment from "moment"

class Company extends Component {
  render(){
    const { company } = this.props

    return(
      <div className="company">
        <h2>{company.type} {company.name}</h2>
        <p>
          {company.active ? 'Активна' : 'Неактивна'}
        </p>
        <p>ОГРН: {company.ogrn}</p>
        <p>Дата регистрации: {moment(company.registration_date).format('DD MMM YYYY')}</p>
      </div>
    )
  }
}

export default Company;