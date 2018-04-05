import * as Immutable from 'immutable';
import * as TYPES from './actionType';
import { SystemAction } from './action.d';

const initialState = Immutable.Map({
});

export default (state = initialState, action: SystemAction) => {
  switch (action.type) {
    case TYPES.UPDATE_LANGUAGE_LIST:
      return state.set('languages', action.languages);
    default:
      return state;
  }
};
