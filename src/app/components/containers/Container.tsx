import React, { PropsWithChildren, useContext, RefObject } from 'react';
import {
    ScrollView,
    StyleSheet,
    ScrollViewProps,
    ViewProps,
    View
} from 'react-native';
import { SPACING } from 'styles/sizes';
import { ThemeContext, ThemeProps } from 'react-native-elements';
import { Theme } from 'app/app/styles/themes';
import { SafeAreaView } from 'react-navigation';
import ScreenLoader from '../loaders/ScreenLoader';

const styles = StyleSheet.create({
    safe: {
        flex: 1
    }
});

export interface ContainerProps {
    withPadding?: boolean;
    useScrollView?: boolean;
    loading?: boolean;
}

export type Props = ContainerProps &
    ScrollViewProps &
    ViewProps &
    PropsWithChildren<ContainerProps>;
export type Ref = ScrollView | View;
const Container = (props: Props, ref: RefObject<any>) => {
    const {
        withPadding,
        useScrollView,
        children,
        contentContainerStyle,
        style,
        loading
    } = props;
    const hasPadding = withPadding === undefined ? true : withPadding;
    const withScrollView = useScrollView === undefined ? true : useScrollView;
    const padding = hasPadding ? SPACING.medium : 0;
    const { theme } = useContext(ThemeContext) as ThemeProps<Theme>;
    const backgroundColor = theme.colors.surface;
    const element = withScrollView ? (
        <ScrollView
            ref={ref}
            keyboardShouldPersistTaps="handled"
            {...props}
            contentContainerStyle={[
                { backgroundColor },
                { padding },
                contentContainerStyle
            ]}
        >
            {children}
        </ScrollView>
    ) : (
        <View
            ref={ref}
            keyboardShouldPersistTaps="handled"
            style={[styles.safe, style, { backgroundColor }]}
            {...props}
        >
            {children}
        </View>
    );
    return (
        <SafeAreaView style={[styles.safe, { backgroundColor }]}>
            {element}
            {loading && <ScreenLoader />}
        </SafeAreaView>
    );
};
export default React.forwardRef<Ref, Props>(Container);
