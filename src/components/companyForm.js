import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import DateTime from 'react-datetime'


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
        <div className='form-control'>
          <label htmlFor="name">Название компании:</label>
          <Field name="name" component="input" type="text"/>
        </div>
        <div className='form-control'>
          <label htmlFor="type">Тип организации:</label>
          <Field name="type" component="select">
            <option value="OOO">ООО</option>
            <option value="ИП">ИП</option>
            <option value="ОАО">ОАО</option>
            <option value="ЗАО">ЗАО</option>
          </Field>
        </div>
        <div className='form-control'>
          <label htmlFor="active">Активна:</label>
          <Field name="active" component="input" type="checkbox" />
        </div>
        <div className='form-control'>
          <label htmlFor="ogrn">ОГРН:</label>
          <Field name="ogrn" component="input" type="number" />
        </div>
        <div className='form-control'>
          <label>Дата регистрации:</label>
          <Field name="registration_date" component={this.renderDateTime}/>
        </div>
        <button type="submit">Сохранить</button>
        <p>После сохранения данные в карточке кампании обновяться</p>
      </form>
    )
  }
}

CompanyForm = reduxForm({
  form: 'company'
})(CompanyForm)

export default CompanyForm