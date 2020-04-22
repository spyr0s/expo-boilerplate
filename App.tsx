import React, { useEffect } from 'react';
import { YellowBox } from 'react-native';
import { appStarted, setLocale } from 'app/app/redux/app/actions';
import { enableScreens } from 'react-native-screens';
import { Persistor } from 'redux-persist';
import configureStore from 'app/app/redux/store';

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
import Storage from 'app/services/storage/Storage';
import moment from 'moment';
import 'moment/min/locales';
import { AppInitialState } from 'app/app/redux/redux';

// const { dsn } = Constants.manifest.extra.sentry;
// Sentry.init({
//     dsn,
//     enableInExpoDevelopment: true,
//     debug: true
// });
export default () => {
    YellowBox.ignoreWarnings(['Setting a timer']);

    i18n.fallbacks = true;
    i18n.translations = { el, en };
    enableScreens();
    const [scheme, setScheme] = React.useState(Appearance.getColorScheme());
    const [persist, setPersist] = React.useState(null);
    const [ready, setReady] = React.useState(false);
    const theme = createTheme(scheme);

    const init = async persist => {
        return Promise.all([
            Storage.getItem(Storage.KEY_THEME).then(scheme => {
                const currentScheme = scheme || Appearance.getColorScheme();
                setScheme(currentScheme);
            }),
            Storage.getItem(Storage.KEY_LOCALE).then(locale => {
                const loc = locale || Localization.locale;
                i18n.locale = loc;
                moment.locale(loc);
                persist.store.dispatch(setLocale(loc));
            })
        ]);
    };

    useEffect(() => {
        Storage.getItem(Storage.KEY_THEME).then(scheme => {
            const currentScheme = scheme || Appearance.getColorScheme();
            setScheme(currentScheme);
        });
    }, [theme]);

    useEffect(() => {
        const persist: { store: any; persistor: Persistor } = configureStore(
            AppInitialState,
            () => {
                persist.store.dispatch(appStarted());
            }
        );
        setPersist(persist);
        init(persist).then(() => {
            setReady(true);
        });
    }, []);
    return ready ? (
        <Provider store={persist.store}>
            <PersistGate persistor={persist.persistor}>
                <ThemeProvider theme={theme}>
                    <Navigator />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    ) : null;
};
