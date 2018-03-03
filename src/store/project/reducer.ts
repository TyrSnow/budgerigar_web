import * as Immutable from 'immutable';
import axios from 'axios';
import * as TYPES from './actionType';
import { ProjectAction } from './action.d';

const initialState = Immutable.Map({

});

export default (state = initialState, action: ProjectAction) => {
  switch (action.type) {
    case TYPES.UPDATE_PROJECT_LIST:
      return state.merge({
        list: action.list,
        page: action.page
      });
    default:
      return state;
  }
};