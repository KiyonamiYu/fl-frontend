import { combineReducers } from 'redux';
import { clientReducer } from './client';
import { spaceReducer } from './space';
import { modelReducer } from './model';
import { State } from '../types';
import { utilsReducer } from './utils';

export default combineReducers<State>({
  Client: clientReducer,
  Space: spaceReducer,
  Model: modelReducer,
  Utils: utilsReducer
});
