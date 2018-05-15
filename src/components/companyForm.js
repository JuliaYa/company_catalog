import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import DateTime from 'react-datetime';



class CompanyForm extends Component{

  renderDateTime = ({input}) => (
    <DateTime 
      dateFormat="DD MMM YYYY"
      timeFormat={false}
      {...input}
    />)

  render(){
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Название компании:</label>
          <Field name="name" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="type">Тип организации:</label>
          <Field name="type" component="select">
            <option />
            <option value="OOO">ООО</option>
            <option value="ИП">ИП</option>
            <option value="ОАО">ОАО</option>
            <option value="ЗАО">ЗАО</option>
          </Field>
        </div>
        <div>
          <label htmlFor="ogrn">ОГРН:</label>
          <Field name="ogrn" component="input" type="number" />
        </div>
        <div>
          <label>Дата регистрации:</label>
          <Field name="registration_date" component={this.renderDateTime}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

CompanyForm = reduxForm({
  form: 'company'
})(CompanyForm)

export default CompanyForm