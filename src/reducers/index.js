import { combineReducers } from 'redux';

import { 
  SET_COUNTRIES_DISPLAY_TYPE, 
  COUNTRIES_DISPLAY_TYPES,
  FILTER_AND_SORT_COUNTRIES,
  FILTER_COUNTRIES_BY_REGION,
  FILTER_COUNTRIES_BY_REGIONAL_BLOC,
  FILTER_COUNTRIES_BY_SUBREGION,
  FILTER_COUNTRIES_BY_LANGUAGES,
  FILTER_COUNTRIES_BY_NAME,
  RESET_FILTERS,
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  SET_SETTINGS_UNIT,
  SETTINGS_UNIT_TYPES
} from '../actions';

const initialCountriesState = {
  all: [],
  filtered: [],
  regions: [],
  subregions: [],
  languages: [],
  regionalBlocs: [],
  displayType: COUNTRIES_DISPLAY_TYPES.MAP,
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
    case  FETCH_COUNTRIES_FAILURE:
      return { 
        ...state,
        loading: false,
        error: action.error
      };
    case SET_COUNTRIES_DISPLAY_TYPE:
      return { ...state, displayType: action.displayType };
    case FILTER_AND_SORT_COUNTRIES:
      return  {...state, filtered: action.filteredCountries };
    default:
      return state;
  }
};

const initialSortAndFiltersState = {
  filterRegion: null,
  filterSubregion: null,
  filterRegionalBloc: null,
  filterLanguages: null,
  filterName: null
}
const sortAndFilters = (state = initialSortAndFiltersState, action) => {
  switch (action.type) {
    case FILTER_COUNTRIES_BY_REGION:
      return { ...state, filterRegion: action.filterRegion };
    case FILTER_COUNTRIES_BY_SUBREGION:
      return { ...state, filterSubregion: action.filterSubregion };
    case FILTER_COUNTRIES_BY_REGIONAL_BLOC:
      return { ...state, filterRegionalBloc: action.filterRegionalBloc };
    case FILTER_COUNTRIES_BY_LANGUAGES:
      return { ...state, filterLanguages: action.filterLanguages };
    case FILTER_COUNTRIES_BY_NAME:
      return { ...state, filterName: action.filterName };                        
    case RESET_FILTERS:
      return {...state, ...initialSortAndFiltersState};
    default:
      return state;
  }
}

const initialSettingsState = {
  unit: SETTINGS_UNIT_TYPES.METRIC
};

const settings = (state = initialSettingsState, action) => {
  switch(action.type) {
    case SET_SETTINGS_UNIT:
      return { ...state, unit: action.unit };
    default:
      return state;
  }
};

export default combineReducers({ countries, sortAndFilters, settings });