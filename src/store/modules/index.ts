import { combineReducers } from 'redux';
import ui from './ui';

const reducers = combineReducers({
    ui
});

export default reducers;

export type RootStore = ReturnType<typeof reducers>