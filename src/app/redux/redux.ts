import { combineReducers } from 'redux';
import { app, initialAppState, AppState } from './app/reducers';

export interface BPState {
    app: AppState;
}
export const BPInitialState: BPState = {
    app: initialAppState
};
const state = combineReducers({
    app
});

export default state;
