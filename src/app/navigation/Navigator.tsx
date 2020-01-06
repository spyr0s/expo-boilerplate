import React from 'react';
import {
    NavigationInjectedProps,
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import AuthCheck from 'app/views/auth/AuthCheck';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

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
        authLoad: AuthCheck,
        auth: AuthStack,
        mainStack: MainStack
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
export default App;
