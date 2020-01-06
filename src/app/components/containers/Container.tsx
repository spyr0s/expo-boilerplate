import React, { PropsWithChildren } from 'react';
import { ScrollView, SafeAreaView, StyleProp, ViewStyle } from 'react-native';
import { SPACING } from 'app/app/styles/sizes';

export interface ContainerProps {
    style?: StyleProp<ViewStyle>;
    withPadding?: boolean;
}

export type Props = ContainerProps & PropsWithChildren<{}>;
const Container = ({ style, withPadding, children }: Props) => {
    const padding = withPadding ? SPACING.medium : 0;
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={[style, { padding }]}>
                {children}
            </ScrollView>
        </SafeAreaView>
    );
};
Container.defaultProps = {
    style: { alignItems: 'center' },
    withPadding: true
};
export default Container;
