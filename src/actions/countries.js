import countryApi from '../api/countryApi'

export const FETCH_COUNTRIES_REQUEST = 'FETCH_COUNTRIES_REQUEST'
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS'
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE'
export const SET_COUNTRIES_DISPLAY_TYPE = 'SET_COUNTRIES_DISPLAY_TYPE'
export const FILTER_AND_SORT_COUNTRIES = 'FILTER_AND_SORT_COUNTRIES'
export const SET_SELECTED_COUNTRY = 'SET_SELECTED_COUNTRY'

export const COUNTRIES_DISPLAY_TYPES = {
  MAP: 'map',
  GRID: 'grid',
  TABLE: 'table'
}

export const fetchCountriesRequest = () => ({
  type: FETCH_COUNTRIES_REQUEST
})

export const fetchCountriesSuccess = ({ countries, regions, subregions, languages, regionalBlocs }) => ({
  type: FETCH_COUNTRIES_SUCCESS,
  countries,
  regions,
  subregions,
  languages,
  regionalBlocs
})

export const fetchCountriesFailure = error => ({
  type: FETCH_COUNTRIES_FAILURE,
  error
})

export const fetchCountries = () => {
  return dispatch => {
    dispatch(fetchCountriesRequest())
    countryApi
      .getCountries()
      .then(res => res.json())
      .then(countries => {
        const regionData = countryApi.buildRegionData(countries)
        dispatch(fetchCountriesSuccess({ countries, ...regionData }))
      })
      .catch(error => {
        dispatch(fetchCountriesFailure(error.message))
      })
  }
}

export const filterAndSortCountries = (countries, filterAndSorts) => {
  const filteredCountries = countryApi.filterAndSortCountries(countries, filterAndSorts)
  return {
    type: FILTER_AND_SORT_COUNTRIES,
    filteredCountries
  }
}

export const setCountryDisplayType = displayType => ({
  type: SET_COUNTRIES_DISPLAY_TYPE,
  displayType
})

export const setSelectedCountry = country => ({
  type: SET_SELECTED_COUNTRY,
  country
})
