export const SET_SETTINGS_UNIT = 'SET_SETTINGS_UNIT'

export const SETTINGS_UNIT_TYPES = {
  METRIC: 'metric',
  IMPERIAL: 'imperial'
}

export const setSettingsUnit = unit => ({
  type: SET_SETTINGS_UNIT,
  unit
})
