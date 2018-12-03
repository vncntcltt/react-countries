import { 
  SET_COUNTRIES_DISPLAY_TYPE, 
  COUNTRIES_DISPLAY_TYPES,
  FILTER_AND_SORT_COUNTRIES,
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  SET_SELECTED_COUNTRY
} from '../actions';

const initialCountriesState = {
  all: [],
  filtered: [],
  regions: [],
  subregions: [],
  languages: [],
  regionalBlocs: [],
  displayType: COUNTRIES_DISPLAY_TYPES.MAP,
  selectedCountry: null,
  loading: null,
  error: null
};

const countries = (state = initialCountriesState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        all: action.countries, 
        filtered: action.countries, 
        regions: action.regions, 
        subregions: action.subregions,
        languages: action.languages,
        regionalBlocs: action.regionalBlocs      
      };
    case FETCH_COUNTRIES_FAILURE:
      return { 
        ...state,
        loading: false,
        error: action.error
      };
    case SET_COUNTRIES_DISPLAY_TYPE:
      return { ...state, displayType: action.displayType };
    case FILTER_AND_SORT_COUNTRIES:
      return  {...state, filtered: action.filteredCountries };
    case SET_SELECTED_COUNTRY:
      return {...state, selectedCountry: action.country};
    default:
      return state;
  }
};

export default countries;