import React from 'react';
import {
    NavigationInjectedProps,
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import AuthCheck from 'app/views/auth/AuthCheck';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import Constants from '../Constants';

export interface NavParams {
    id?: number;
    title?: string;
    headerRight?: JSX.Element;
    headerLeft?: JSX.Element;
}

const MainStack = createStackNavigator(
    {
        App: AppStack
    },
    {
        headerMode: 'none'
    }
);

const Router = createSwitchNavigator(
    {
        [Constants.Navigation.Auth.CHECK]: AuthCheck,
        [Constants.Navigation.Auth.STACK]: AuthStack,
        [Constants.Navigation.Main.STACK]: MainStack
    },
    {
        initialRouteName: 'authLoad'
    }
);

class AppNavigator extends React.Component<NavigationInjectedProps> {
    static router = Router.router;

    render() {
        const { navigation } = this.props;
        return <Router navigation={navigation} />;
    }
}

const App = createAppContainer(AppNavigator);
const AppNav = () => {
    const scheme = useSelector((state: any) => state.app.scheme);
    return (
        <>
            <StatusBar
                backgroundColor="transparent"
                showHideTransition="fade"
                barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
            />
            <App theme={scheme} />
        </>
    );
};

export default AppNav;
