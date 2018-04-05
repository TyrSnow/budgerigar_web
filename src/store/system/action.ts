import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { AppStore } from '../index.d';
import * as TYPES from './actionType';
import { Language } from '../../definition/language';

export function updateLanguage(languages: Array<Language>) {
  return {
    type: TYPES.UPDATE_LANGUAGE_LIST,
    languages,
  };
}
export function loadLanguageList(): ThunkAction<Promise<Action>, AppStore, any> {
  return (dispatch) => {
    return axios.get('/api/languages?all').then(
      resp => dispatch(updateLanguage(resp.data.data)),
    );
  };
}