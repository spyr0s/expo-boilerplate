import React from 'react';
import { connect } from 'react-redux';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Text } from 'react-native';
import Container from 'app/app/components/containers/Container';
import i18n from 'i18n-js';

export interface AuthCheckNavParams {}
export interface AuthCheckProps {}

interface StateProps {}

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

    render() {
        return (
            <Container>
                <Text>{i18n.t('AUTH_CHECK')}</Text>
            </Container>
        );
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthCheck);
