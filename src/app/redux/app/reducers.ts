import { APP_STARTED, AppAction } from './actions';

export interface AppState {
    appStarted: boolean;
}

export const initialAppState: AppState = {
    appStarted: false
};

export function app(state: AppState = initialAppState, action: AppAction) {
    switch (action.type) {
        case APP_STARTED: {
            return { ...state, appStarted: action.payload.appStarted };
        }
        default:
            return state;
    }
}
