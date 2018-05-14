import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class CompanyForm extends Component{
  componentWillMount() {
    this.props.initialize(this.props.company);
  }

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