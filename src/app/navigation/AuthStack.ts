import { createStackNavigator } from 'react-navigation-stack';
import SignInView from 'app/views/auth/SignInView';

const AuthStack = createStackNavigator(
    {
        signIn: SignInView
    },
    {
        initialRouteKey: 'signIn',
        headerMode: 'none'
    }
);
export default AuthStack;
