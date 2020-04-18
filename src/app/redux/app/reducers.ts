import { APP_STARTED, AppAction } from 'app/app/redux/app/actions';

export interface ApplicationState {
    appStarted: boolean;
}

export const initialAppState: ApplicationState = {
    appStarted: false
};

export function app(
    state: ApplicationState = initialAppState,
    action: AppAction
) {
    switch (action.type) {
        case APP_STARTED: {
            return { ...state, appStarted: action.payload.appStarted };
        }
        default:
            return state;
    }
}
