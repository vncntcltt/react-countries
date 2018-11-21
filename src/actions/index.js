export const COUNTRIES_SET_DISPLAY_TYPE = 'COUNTRIES_SET_DISPLAY_TYPE';

export const COUNTRIES_DISPLAY_TYPES = {
  MAP: 'map',
  GRID: 'grid',
  TABLE: 'table'
};

export const setCountryDisplayType = displayType => ({
  type: COUNTRIES_SET_DISPLAY_TYPE,
  displayType
});