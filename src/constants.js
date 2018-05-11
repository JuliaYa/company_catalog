import mirrorCreator from 'mirror-creator'

const actionTypes = mirrorCreator([
  'FETCH_COMPANIES_REQUEST',
  'FETCH_COMPANIES_SUCCESS',
  'FETCH_COMPANIES_FAILURE',
  'CHOOSE_COMPANY',
  'CHOOSE_COMPANY_SUCCESS',
  'FETCH_COMPANY_FAILURE'
]);
export default actionTypes;