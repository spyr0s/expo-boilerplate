import React from 'react';
import { connect } from 'react-redux';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import Container from 'app/app/components/containers/Container';
import ScreenLoader from 'app/app/components/loaders/ScreenLoader';
import Constants from 'app/app/Constants';

export interface AuthCheckNavParams {}
export interface AuthCheckProps {}

interface StateProps {
    user;
}

interface DispatchProps {}

interface State {}

type Props = AuthCheckProps &
    StateProps &
    DispatchProps &
    NavigationStackScreenProps<AuthCheckNavParams>;

class AuthCheck extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { user, navigation } = this.props;
        if (!user) {
            navigation.navigate(Constants.Navigation.Auth.SIGN_IN);
        }
    }

    render() {
        return (
            <Container>
                <ScreenLoader />
            </Container>
        );
    }
}

const mapStateToProps = state => {
    const { user } = state.auth;
    return {
        user
    };
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthCheck);
