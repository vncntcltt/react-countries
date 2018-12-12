export const FILTER_COUNTRIES_BY_REGION = 'FILTER_COUNTRIES_BY_REGION'
export const FILTER_COUNTRIES_BY_SUBREGION = 'FILTER_COUNTRIES_BY_SUBREGION'
export const FILTER_COUNTRIES_BY_REGIONAL_BLOC = 'FILTER_COUNTRIES_BY_REGIONAL_BLOC'
export const FILTER_COUNTRIES_BY_LANGUAGES = 'FILTER_COUNTRIES_BY_LANGUAGES'
export const FILTER_COUNTRIES_BY_NAME = 'FILTER_COUNTRIES_BY_NAME'
export const RESET_FILTERS = 'RESET_FILTERS'

export const filterCountriesByRegion = filterRegion => ({
  type: FILTER_COUNTRIES_BY_REGION,
  filterRegion
})

export const filterCountriesBySubregion = filterSubregion => ({
  type: FILTER_COUNTRIES_BY_SUBREGION,
  filterSubregion
})

export const filterCountriesByRegionalBloc = filterRegionalBloc => ({
  type: FILTER_COUNTRIES_BY_REGIONAL_BLOC,
  filterRegionalBloc
})

export const filterCountriesByLanguages = filterLanguages => ({
  type: FILTER_COUNTRIES_BY_LANGUAGES,
  filterLanguages
})

export const filterCountriesByName = filterName => ({
  type: FILTER_COUNTRIES_BY_NAME,
  filterName
})

export const resetFilters = () => ({
  type: RESET_FILTERS
})
