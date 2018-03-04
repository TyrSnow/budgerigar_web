import * as Immutable from 'immutable';
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

    case TYPES.APPEND_LIST:
      let appendList = <Immutable.List<any>> state.get('list');
      return state.set('list', appendList.unshift(Immutable.Map(action.data)));

    case TYPES.LOAD_ACTIVE:
      return state.set('loadActive', true);

    case TYPES.SET_ACTIVE_PROJECT:
      return state.set('activeProj', action.data).set('loadActive', false);

    case TYPES.CLEAR_ACTIVE:
      return state.remove('activeProj');

    case TYPES.REMOVE_PROJ:
      let list = <Immutable.List<any>> state.get('list');
      return state.set('list', list.filter(v => v.get('_id') !== action.id));

    case TYPES.SHOW_CREATE:
      return state.set('createVisible', true);

    case TYPES.HIDE_CREATE:
      return state.set('createVisible', false);

    default:
      return state;
  }
};