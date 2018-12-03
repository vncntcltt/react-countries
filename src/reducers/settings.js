import { SET_SETTINGS_UNIT, SETTINGS_UNIT_TYPES } from '../actions';

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

export default settings;