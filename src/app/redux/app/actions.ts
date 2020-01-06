import { AnyAction } from 'redux';

export const APP_STARTED = 'APP_STARTED';

export interface AppAction extends AnyAction {
    payload: {
        appStarted: boolean;
    };
}

export const appStarted = () => dispatch => {
    return new Promise(resolve => {
        resolve(dispatch({ type: APP_STARTED, payload: { appStarted: true } }));
    });
};
