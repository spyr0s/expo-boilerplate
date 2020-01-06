import { combineReducers } from 'redux';
import { app, initialAppState, AppState } from './app/reducers';

export interface FTState {
    app: AppState;
}
export const FTInitialState: FTState = {
    app: initialAppState
};
const state = combineReducers({
    app
});

export default state;
