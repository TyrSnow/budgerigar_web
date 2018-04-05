import { Action } from 'redux';
import { Language } from '../../definition/language';

export interface SystemAction extends Action {
  languages: Array<Language>,
}
