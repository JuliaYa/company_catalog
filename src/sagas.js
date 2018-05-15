import { all, take, fork, call, put } from "redux-saga/effects"
import axios from "axios"
import './mock'
import actionTypes from './constants'


function fetchCompanies(){
  return axios({
    method: "get",
    url: "/companies"
  });
}

function fetchCompany(id){
  return axios({
    method: "get",
    url: "/company/" + id
  });
}

function updateCompany(company){
  return axios({
    method: "patch",
    data: company,
    url: "/company/" + company.id
  })
}

/*-----*/

function* getCompaniesWatcher(){
  while(true){
    yield take(actionTypes.FETCH_COMPANIES_REQUEST)
    try {
      const response = yield call(fetchCompanies);
      const companies = response.data.companies;
      yield put({ type: actionTypes.FETCH_COMPANIES_SUCCESS, companies });
    } catch (error) {
      yield put({ type: actionTypes.FETCH_COMPANIES_FAILURE, error });
    }
  }
}

function* fetchCompanyWatcher(){
  while(true){
    const action = yield take(actionTypes.FETCH_COMPANY)
    try{
      const response = yield call(fetchCompany, action.payload)
      const company = response.data.company
      yield put({ type: actionTypes.FETCH_COMPANY_SUCCESS, company })
    } catch(error){
      yield put({ type: actionTypes.FETCH_COMPANY_FAILURE, error })
    }
  }
}

function* updateCompsnyWatcher(){
  while(true){
    const action = yield take(actionTypes.UPDATE_COMPANY)
    try{
      const response = yield call(updateCompany, action.payload)
      const company = response.data.company
      yield put({ type: actionTypes.UPDATE_COMPANY_SUCCESS, company })
    } catch(error){
      yield put({ type: actionTypes.UPDATE_COMPANY_FAILRE, error })
    }
  }
}

export default function* root() {
  yield all([
    fork(getCompaniesWatcher),
    fork(fetchCompanyWatcher),
    fork(updateCompsnyWatcher)
  ])
}