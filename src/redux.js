import actionTypes from './constants'

const initialState = {
  fetching: false,
  companies: null,
  choosen_company: null,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_COMPANIES_REQUEST:
      return { ...state, fetching: true, choosen_company: null, error: null };
      break;
    case actionTypes.FETCH_COMPANIES_SUCCESS:
      return { ...state, fetching: false, choosen_company: null, companies: action.companies };
      break;
    case actionTypes.FETCH_COMPANIES_FAILURE:
      return { ...state, fetching: false, choosen_company: null, companies: null, error: action.error };
      break;
    case actionTypes.CHOOSE_COMPANY:
      return state;
      break;
    case actionTypes.CHOOSE_COMPANY_SUCCESS:
      return { ...state, fetching: false, choosen_company: action.company, error: null}
      break;
    default:
      return state;
  }
}