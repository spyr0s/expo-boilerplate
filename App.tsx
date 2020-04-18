import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { appStarted } from 'redx/app/actions';
import { enableScreens } from 'react-native-screens';
import { Persistor } from 'redux-persist';
import configureStore from 'app/app/redux/store';
import { BPInitialState } from 'app/app/redux/redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Appearance } from 'react-native-appearance';
import { ThemeProvider } from 'react-native-elements';
import Navigator from 'app/app/navigation/Navigator';
import * as en from 'app/app/tranlsations/english.json';
import * as el from 'app/app/tranlsations/greek.json';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { createTheme } from 'app/app/styles/themes';

export default () => {
    i18n.fallbacks = true;
    i18n.translations = { el, en };
    i18n.locale = Localization.locale;
    enableScreens();
    const [scheme, setScheme] = React.useState(Appearance.getColorScheme());
    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setScheme(colorScheme);
        });
        return function cleanup() {
            subscription.remove();
        };
    });
    const persist: { store: any; persistor: Persistor } = configureStore(
        BPInitialState,
        () => {
            persist.store.dispatch(appStarted());
        }
    );
    const theme = createTheme(scheme);
    return (
        <Provider store={persist.store}>
            <PersistGate persistor={persist.persistor}>
                <StatusBar
                    showHideTransition="slide"
                    barStyle={
                        scheme === 'dark' ? 'light-content' : 'dark-content'
                    }
                />
                <ThemeProvider theme={theme}>
                    <Navigator />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};
