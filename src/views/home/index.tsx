import React from 'react';
import { connect } from 'react-redux';
import { NavigationStackScreenProps } from 'react-navigation-stack';

export interface HomeViewNavParams {}
export interface HomeViewProps {}

interface StateProps {}

interface DispatchProps {}

interface State {}

type Props = HomeViewProps &
    StateProps &
    DispatchProps &
    NavigationStackScreenProps<HomeViewNavParams>;

class HomeView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return null;
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
