import { 
  FILTER_COUNTRIES_BY_REGION,
  FILTER_COUNTRIES_BY_REGIONAL_BLOC,
  FILTER_COUNTRIES_BY_SUBREGION,
  FILTER_COUNTRIES_BY_LANGUAGES,
  FILTER_COUNTRIES_BY_NAME,
  RESET_FILTERS
} from '../actions';

const initialSortAndFiltersState = {
  filterRegion: '',
  filterSubregion: '',
  filterRegionalBloc: '',
  filterLanguages: '',
  filterName: ''
}

const sortAndFilters = (state = initialSortAndFiltersState, action) => {
  switch (action.type) {
    case FILTER_COUNTRIES_BY_REGION:
      return { ...state, filterRegion: action.filterRegion, filterSubregion: '' };
    case FILTER_COUNTRIES_BY_SUBREGION:
      return { ...state, filterSubregion: action.filterSubregion };
    case FILTER_COUNTRIES_BY_REGIONAL_BLOC:
      return { ...state, filterRegionalBloc: action.filterRegionalBloc };
    case FILTER_COUNTRIES_BY_LANGUAGES:
      return { ...state, filterLanguages: action.filterLanguages };
    case FILTER_COUNTRIES_BY_NAME:
      return { ...state, filterName: action.filterName };                        
    case RESET_FILTERS:
      return { ...state, ...initialSortAndFiltersState };
    default:
      return state;
  }
}

export default sortAndFilters;