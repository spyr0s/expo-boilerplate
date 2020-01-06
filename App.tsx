import React from 'react';
import { StatusBar } from 'react-native';
import { appStarted } from 'redx/app/actions';
import { enableScreens } from 'react-native-screens';
import { Persistor } from 'redux-persist';
import configureStore from 'app/app/redux/store';
import { BPInitialState } from 'app/app/redux/redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppearanceProvider, Appearance } from 'react-native-appearance';
import { ThemeProvider } from 'react-native-elements';
import Navigator from 'app/app/navigation/Navigator';

enableScreens();
const scheme = Appearance.getColorScheme();

export default () => {
    const persist: { store: any; persistor: Persistor } = configureStore(
        BPInitialState,
        () => {
            persist.store.dispatch(appStarted());
        }
    );
    return (
        <Provider store={persist.store}>
            <PersistGate persistor={persist.persistor}>
                <AppearanceProvider>
                    <StatusBar
                        showHideTransition="slide"
                        barStyle={
                            scheme === 'light'
                                ? 'light-content'
                                : 'dark-content'
                        }
                    />
                    <ThemeProvider>
                        <Navigator />
                    </ThemeProvider>
                </AppearanceProvider>
            </PersistGate>
        </Provider>
    );
};
