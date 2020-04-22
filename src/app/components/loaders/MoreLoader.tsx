import React from 'react';
import {
    ActivityIndicator,
    View,
    ActivityIndicatorProps,
    StyleSheet
} from 'react-native';
import { SPACING } from 'app/app/styles/sizes';
import { ThemeConsumer } from 'react-native-elements';
import { Theme } from 'styles/themes';

const styles = StyleSheet.create({
    container: {
        marginVertical: SPACING.normal,
        justifyContent: 'center',
        alignItems: 'center'
    },
    spinner: {}
});

type Props = ActivityIndicatorProps;
const MoreLoader = (props: Props) => {
    return (
        <ThemeConsumer<Theme>>
            {({ theme: { colors } }) => {
                return (
                    <View style={styles.container}>
                        <View style={styles.spinner}>
                            <ActivityIndicator
                                color={colors.primary}
                                {...props}
                            />
                        </View>
                    </View>
                );
            }}
        </ThemeConsumer>
    );
};

MoreLoader.defaultProps = {
    size: 'large'
};

export default React.memo(MoreLoader);
