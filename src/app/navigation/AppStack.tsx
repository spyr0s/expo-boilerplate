import { createStackNavigator } from 'react-navigation-stack';
import HomeView from 'views/home';

const AppStack = createStackNavigator(
    {
        home: { screen: HomeView }
    },
    {
        initialRouteKey: 'home',
        headerMode: 'float'
    }
);
export default AppStack;
