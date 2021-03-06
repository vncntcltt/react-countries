import React from 'react'
import PropTypes from 'prop-types'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import countriesGeoJson from '../../assets/countries.geo.json'
import { countryPropType } from '../common/propTypes'

class CountryMap extends React.Component {
  static propTypes = {
    countries: PropTypes.arrayOf(countryPropType),
    onCountrySelected: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.map = null
    this.countriesLayer = null
    this.countriesGeoJson = countriesGeoJson
  }

  componentDidMount() {
    this.map = L.map('map', { minZoom: 2 }).setView([0, 0], 2)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map)
    if (this.props.countries) {
      this.addCountriesLayer()
    }
  }

  componentDidUpdate() {
    this.addCountriesLayer()
  }

  addCountriesLayer() {
    if (this.map.hasLayer(this.countriesLayer)) {
      this.countriesLayer.remove()
    }
    this.countriesLayer = L.geoJSON(this.countriesGeoJson, {
      filter: feature => {
        const countryIds = this.props.countries.map(c => c.alpha3Code)
        return countryIds.includes(feature.id.toString())
      },
      onEachFeature: (feature, layer) => {
        const featureCountry = this.props.countries.find(country => country.alpha3Code === feature.id)
        layer.on('click', e => {
          if (featureCountry) {
            this.props.onCountrySelected(featureCountry)
          }
        })
        layer.bindTooltip('<strong>' + featureCountry.name + '</strong>')
      }
    })
    this.countriesLayer.addTo(this.map)
    let bounds = this.countriesLayer.getBounds()
    if (bounds.isValid()) {
      this.map.fitBounds(bounds)
    } else {
      this.map.setView([0, 0], 2)
    }
  }

  render() {
    const mapStyle = { width: '100%', minWidth: 380, minHeight: 760 }
    return <div id="map" style={mapStyle} />
  }
}

export default CountryMap
