import React, { PropsWithChildren, useContext } from 'react';
import {
    ScrollView,
    SafeAreaView,
    StyleSheet,
    ScrollViewProps
} from 'react-native';
import { SPACING } from 'styles/sizes';
import { ThemeContext, ThemeProps } from 'react-native-elements';
import { Theme } from 'app/app/styles/themes';

const styles = StyleSheet.create({
    safe: {
        flex: 1
    }
});

export interface ContainerProps {
    withPadding?: boolean;
}

export type Props = ContainerProps &
    ScrollViewProps &
    PropsWithChildren<ContainerProps>;
const Container = (props: Props) => {
    const { withPadding, children, contentContainerStyle } = props;
    const padding = withPadding ? SPACING.medium : 0;
    const { theme } = useContext(ThemeContext) as ThemeProps<Theme>;
    console.log({ cont: theme.colors });
    const backgroundColor = theme.colors.surface;
    return (
        <SafeAreaView style={[styles.safe, { backgroundColor }]}>
            <ScrollView
                contentContainerStyle={[
                    contentContainerStyle,
                    { backgroundColor },
                    { padding }
                ]}
                {...props}
            >
                {children}
            </ScrollView>
        </SafeAreaView>
    );
};
Container.defaultProps = {
    withPadding: true
};
export default Container;
