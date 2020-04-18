import React, { useContext } from 'react';
import { SwitchProps, SwitchIOSProps, Switch } from 'react-native';
import { ThemeContext, ThemeProps } from 'react-native-elements';
import { Theme } from 'app/app/styles/themes';

export default (props: SwitchProps & SwitchIOSProps) => {
    const {
        theme: { colors }
    } = useContext(ThemeContext) as ThemeProps<Theme>;

    const defaultProps = {
        trackColor: {
            true: colors.onPrimary,
            false: colors.background
        },
        thumbColor: colors.primary,
        ios_backgroundColor: colors.disabled
    };
    return <Switch {...defaultProps} {...props} />;
};
