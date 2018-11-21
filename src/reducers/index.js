import { COUNTRIES_SET_DISPLAY_TYPE, COUNTRIES_DISPLAY_TYPES } from '../actions';

const initialState = {
  countriesDisplayType: COUNTRIES_DISPLAY_TYPES.MAP
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES_SET_DISPLAY_TYPE:
      return Object.assign({}, state, { countriesDisplayType: action.displayType });
    default:
      return state;
  }
};

export default rootReducer;