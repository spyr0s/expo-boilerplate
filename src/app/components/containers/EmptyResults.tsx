import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeConsumer } from 'react-native-elements';
import { Theme, alpha } from 'styles/themes';
import { SPACING } from 'app/app/styles/sizes';
import Text from '../elements/Text';

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: SPACING.medium
    }
});

export interface EmptyResultsProps {
    text: string;
}

const EmptyResults = ({ text }: EmptyResultsProps) => {
    return (
        <ThemeConsumer<Theme>>
            {({ theme: { colors } }) => {
                const borderBottomColor = alpha(colors.primary, 0.3);
                return (
                    <View style={{ ...styles.container, borderBottomColor }}>
                        <Text textStyle="large">{text}</Text>
                    </View>
                );
            }}
        </ThemeConsumer>
    );
};

export default React.memo(EmptyResults);
