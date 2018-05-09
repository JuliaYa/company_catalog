const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";
const CHOOSE_COMPANY = "CHOOSE_COMPANY";
const CHOOSE_COMPANY_SUCCESS = "CHOOSE_COMPANY_SUCCESS";

const initialState = {
  fetching: false,
  companies: null,
  choosen_company: null,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, choosen_company: null, error: null };
      break;
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, choosen_company: null, companies: action.companies };
      break;
    case API_CALL_FAILURE:
      return { ...state, fetching: false, choosen_company: null, companies: null, error: action.error };
      break;
    case CHOOSE_COMPANY:
      return state;
      break;
    case CHOOSE_COMPANY_SUCCESS:
      return { ...state, fetching: false, choosen_company: action.company, error: null}
      break;
    default:
      return state;
  }
}