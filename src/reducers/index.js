import { combineReducers } from 'redux';

import { 
  COUNTRIES_SET_DISPLAY_TYPE, 
  COUNTRIES_DISPLAY_TYPES,
  COUNTRIES_SET_ALL,
  COUNTRIES_FILTER_AND_SORT,
  FILTER_COUNTRIES_BY_REGION,
  FILTER_COUNTRIES_BY_REGIONAL_BLOC,
  FILTER_COUNTRIES_BY_SUBREGION,
  FILTER_COUNTRIES_BY_LANGUAGES,
  FILTER_COUNTRIES_BY_NAME,
  RESET_FILTERS
} from '../actions';

const initialCountriesState = {  
  all: [],
  filtered: [],
  regions: [],
  subregions: [],
  languages: [],
  regionalBlocs: [],
  displayType: COUNTRIES_DISPLAY_TYPES.MAP
};

const countries = (state = initialCountriesState, action) => {
  switch (action.type) {
    case COUNTRIES_SET_DISPLAY_TYPE:
      return {...state, displayType: action.displayType };
    case COUNTRIES_SET_ALL:
      return {
        ...state, 
        all: action.countries, 
        filtered: action.countries, 
        regions: action.regions, 
        subregions: action.subregions,
        languages: action.languages,
        regionalBlocs: action.regionalBlocs
      };
    case COUNTRIES_FILTER_AND_SORT:
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

export default combineReducers({ countries, sortAndFilters });