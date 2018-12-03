import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import countries from './countries';
import sortAndFilters from './filters';
import settings from './settings';

export default history => combineReducers({ 
  router: connectRouter(history),
  countries, 
  sortAndFilters, 
  settings 
});