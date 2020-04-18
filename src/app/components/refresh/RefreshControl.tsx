import React from 'react';
import {
    RefreshControl as RNRefreshControl,
    RefreshControlProps,
    StyleSheet
} from 'react-native';
import { Theme } from 'styles/themes';
import { ThemeConsumer } from 'react-native-elements';

const styles = StyleSheet.create({
    control: {
        opacity: 0.5
    }
});
type Props = RefreshControlProps;
export default (props: Props) => {
    return (
        <ThemeConsumer<Theme>>
            {({ theme }) => {
                const { colors } = theme;
                return (
                    <RNRefreshControl
                        style={styles.control}
                        tintColor={colors.onSurface}
                        colors={[colors.onSurface]}
                        {...props}
                    />
                );
            }}
        </ThemeConsumer>
    );
};
