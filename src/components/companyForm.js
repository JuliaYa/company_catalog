import React from 'react'
import { Field, reduxForm } from 'redux-form'

let CompanyForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Название:</label>
        <Field name="title" component="input" type="text" />
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
        <Field name="ogrn" component="input" type="text" />
      </div>
      <div>
        <label>Дата регистрации:</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

CompanyForm = reduxForm({
  // a unique name for the form
  form: 'company'
})(CompanyForm)

export default CompanyForm