import { createLogger } from 'redux-logger';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import reducer, { AppState } from './redux';

const loggerMiddleware = createLogger({
    duration: true,
    timestamp: false
});

const persistConfig: PersistConfig<AppState> = {
    key: 'root',
    storage: AsyncStorage
};

// This connects the reducer to the store
export default function configureStore(
    initialState: any,
    callback?: () => void
) {
    let store = null;
    const persistedReducer = persistReducer(persistConfig, reducer);
    if (__DEV__) {
        store = createStore(
            persistedReducer,
            initialState,
            applyMiddleware(
                apiMiddleware,
                thunk, // lets us dispatch() functions
                loggerMiddleware // neat middleware that logs actions
            )
        );
    } else {
        store = createStore(
            persistedReducer,
            initialState,
            applyMiddleware(
                apiMiddleware,
                thunk // lets us dispatch() functions
            )
        );
    }
    const persistor = persistStore(store, null, callback);
    return { store, persistor };
}
