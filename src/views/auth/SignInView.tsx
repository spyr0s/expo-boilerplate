import React from 'react';
import { connect } from 'react-redux';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import Container from 'app/app/components/containers/Container';

export interface SignInViewNavParams {}
export interface SignInViewProps {}

interface StateProps {}

interface DispatchProps {}

interface State {}

type Props = SignInViewProps &
    StateProps &
    DispatchProps &
    NavigationStackScreenProps<SignInViewNavParams>;

class SignInView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <Container />
            </>
        );
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInView);
