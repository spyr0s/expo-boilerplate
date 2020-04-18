import { AnyAction } from 'redux';

export const APP_STARTED = 'APP_STARTED';
export const RESET_STORE = 'RESET_STORE';
export const SET_LOCALE = 'SET_LOCALE';

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

export const resetStore = () => (dispatch): Promise<AppAction> => {
    return new Promise(resolve => resolve(dispatch({ type: RESET_STORE })));
};

export const setLocale = (locale: string) => dispatch => {
    return new Promise(resolve => {
        resolve(dispatch({ type: SET_LOCALE, payload: { locale } }));
    });
};
