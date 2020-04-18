import React from 'react';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import HeaderIcon from './HeaderIcon';

export interface BackProps {}

type Props = BackProps & NavigationInjectedProps;
const Back = ({ navigation }: Props) => {
    return (
        <HeaderIcon
            name="arrow-left"
            onPress={() => {
                navigation.goBack(null);
            }}
        />
    );
};

export default withNavigation(Back);
