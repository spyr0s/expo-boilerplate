import React from 'react';
import { Header as RNHeader, HeaderProps } from 'react-native-elements';

const Header = (props: HeaderProps) => {
    return <RNHeader {...props} statusBarProps={{ translucent: true }} />;
};

export default React.memo(Header);
