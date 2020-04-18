import { combineReducers } from 'redux';
import {
    app,
    initialAppState as initialApplicationState,
    ApplicationState
} from './app/reducers';

export interface AppState {
    app: ApplicationState;
}
export const AppInitialState: AppState = {
    app: initialApplicationState
};
const state = combineReducers({
    app
});

export default state;
