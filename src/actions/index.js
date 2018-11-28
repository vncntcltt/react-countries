import countryApi from '../api/countryApi';

export const FETCH_COUNTRIES_REQUEST = 'FETCH_COUNTRIES_REQUEST';
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE';
export const SET_COUNTRIES_DISPLAY_TYPE = 'SET_COUNTRIES_DISPLAY_TYPE';
export const FILTER_AND_SORT_COUNTRIES = 'FILTER_AND_SORT_COUNTRIES';
export const FILTER_COUNTRIES_BY_REGION = 'FILTER_COUNTRIES_BY_REGION';
export const FILTER_COUNTRIES_BY_SUBREGION = 'FILTER_COUNTRIES_BY_SUBREGION';
export const FILTER_COUNTRIES_BY_REGIONAL_BLOC = 'FILTER_COUNTRIES_BY_REGIONAL_BLOC';
export const FILTER_COUNTRIES_BY_LANGUAGES = 'FILTER_COUNTRIES_BY_LANGUAGES';
export const FILTER_COUNTRIES_BY_NAME = 'FILTER_COUNTRIES_BY_NAME';
export const RESET_FILTERS = 'RESET_FILTERS';
export const SET_SETTINGS_UNIT = 'SET_SETTINGS_UNIT'; 

export const COUNTRIES_DISPLAY_TYPES = {
  MAP: 'map',
  GRID: 'grid',
  TABLE: 'table'
};

export const SETTINGS_UNIT_TYPES = {
  METRIC: 'metric',
  IMPERIAL: 'imperial'
};

export const fetchCountriesRequest = () => ({
  type: FETCH_COUNTRIES_REQUEST
});

export const fetchCountriesSuccess = ({ countries, regions, subregions, languages, regionalBlocs }) => ({
  type: FETCH_COUNTRIES_SUCCESS,
  countries,
  regions,
  subregions,
  languages,
  regionalBlocs
});

export const fetchCountriesFailure = error => ({
  type: FETCH_COUNTRIES_FAILURE,
  error
});

export const fetchCountries = () => {
  return dispatch => {
    dispatch(fetchCountriesRequest());
    countryApi.getCountries()
      .then(res => res.json())
      .then(
        countries => {
          const regionData = countryApi.buildRegionData(countries);
          dispatch(fetchCountriesSuccess({ countries, ...regionData }));
        },
        error => {
          dispatch(fetchCountriesFailure(error));
        }
      );  
  };
};

export const setCountryDisplayType = displayType => ({
  type: SET_COUNTRIES_DISPLAY_TYPE,
  displayType
});

export const filterAndSortCountries = (countries, filterAndSorts) => {
  const filteredCountries = countryApi.filterAndSortCountries(countries, filterAndSorts);
  return {
    type: FILTER_AND_SORT_COUNTRIES,
    filteredCountries
  };
};

export const filterCountriesByRegion = filterRegion => ({
  type: FILTER_COUNTRIES_BY_REGION,
  filterRegion
});

export const filterCountriesBySubregion = filterSubregion => ({
  type: FILTER_COUNTRIES_BY_SUBREGION,
  filterSubregion
});

export const filterCountriesByRegionalBloc = filterRegionalBloc => ({
  type: FILTER_COUNTRIES_BY_REGIONAL_BLOC,
  filterRegionalBloc
});

export const filterCountriesByLanguages = filterLanguages => ({
  type: FILTER_COUNTRIES_BY_LANGUAGES,
  filterLanguages
});

export const filterCountriesByName = filterName => ({
  type: FILTER_COUNTRIES_BY_NAME,
  filterName
});

export const resetFilters = () => ({
  type: RESET_FILTERS  
});


export const setSettingsUnit = unit => ({
  type: SET_SETTINGS_UNIT,
  unit
});
