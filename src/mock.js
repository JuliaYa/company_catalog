import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import moment from 'moment'

const companies = [
  { id: "1", name: 'Азалия', ogrn: "1053600591197", type: 'ИП', registration_date: moment('2013-04-08'), active: true },
  { id: "2", name: 'Иванов и Ко', ogrn: "1053656791197", type: 'ИП', registration_date: moment('2014-11-08'), active: false },
  { id: "3", name: 'Гарант', ogrn: "8563453534533", type: 'ООО', registration_date: moment('2018-01-23'), active: true },
  { id: "4", name: 'Петров И.П.', ogrn: "8868676434533", type: 'ИП', registration_date: moment('2015-03-24'), active: true },
  { id: "5", name: 'Симбирсофт', ogrn: "1053656567597", type: 'ООО', registration_date: moment('2011-01-08'), active: false },
  { id: "6", name: 'Рестрим', ogrn: "1454666641191", type: 'ОАО', registration_date: moment('2009-12-18'), active: true }
]

const mock = new MockAdapter(axios)

mock.onGet('/companies').reply(200, {
  companies: companies
});

mock.onGet(/\/company\/\d+/).reply(config => {
  const id = config.url.split('/')[2]
  const company = companies.find((company) => {
    return company.id === id;
  })
  return [200, {company: company}]
})

mock.onPatch(/\/company\/\d+/).reply(config => {
  const company = JSON.parse(config.data)
  return [200, {company: company}]
})