import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeConsumer, CheckBox as RNCheckBox } from 'react-native-elements';
import { disabled, Theme } from 'app/app/styles/themes';
import { SPACING } from 'app/app/styles/sizes';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: SPACING.small
    },
    checkbox: {
        paddingHorizontal: 0
    }
});
export interface CheckBoxProps {
    label?: string;
    checked: boolean;
    onPress: () => void;
}

export default ({ label, checked, onPress }: CheckBoxProps) => {
    return (
        <ThemeConsumer<Theme>>
            {({ theme }) => {
                const { colors } = theme;
                return (
                    <View style={styles.container}>
                        {label && (
                            <Text
                                color={disabled(colors.onSurface)}
                                textStyle="large"
                            >
                                {label}
                            </Text>
                        )}
                        <RNCheckBox
                            containerStyle={styles.checkbox}
                            {...{ checked, onPress }}
                        />
                    </View>
                );
            }}
        </ThemeConsumer>
    );
};
