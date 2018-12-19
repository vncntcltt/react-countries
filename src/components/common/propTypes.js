import { shape, string, number, arrayOf } from 'prop-types'

export const languagePropType = shape({
  name: string.isRequired
})

export const currencyPropType = shape({
  name: string,
  code: string
})

export const regionalBlocPropType = shape({
  name: string.isRequired
})

export const countryPropType = shape({
  name: string.isRequired,
  alpha3Code: string.isRequired,
  capital: string,
  region: string,
  subregion: string,
  population: number,
  area: number,
  languages: arrayOf(languagePropType),
  currencies: arrayOf(currencyPropType),
  regionalBlocs: arrayOf(regionalBlocPropType)
})

export const sortAndFilterPropType = shape({
  filterRegion: string.isRequired,
  filterSubregion: string.isRequired,
  filterRegionalBloc: string.isRequired,
  filterLanguages: string.isRequired,
  filterName: string.isRequired
})
