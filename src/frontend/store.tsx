import { createStore, combineReducers } from 'redux';
import { click, ClickStateType} from './reducers/click';

export interface StoreStateType {
  click: ClickStateType;
}

const appReducer = combineReducers({
  click
});

export default createStore(appReducer);
