import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { ThemeConsumer, Overlay, Button } from 'react-native-elements';
import { Theme } from 'styles/themes';
import i18n from 'i18n-js';
import { SPACING } from 'app/app/styles/sizes';
import Text from '../elements/Text';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        padding: SPACING.medium
    },
    bodyContainer: {
        padding: SPACING.medium
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SPACING.medium
    },
    button: {
        flex: 1,
        marginHorizontal: SPACING.small
    }
});

export interface ConfirmProps {
    title: string;
    confirmation: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
    onCancel: () => void;
    isVisible: boolean;
}

const Confirm = ({
    title,
    confirmation,
    onCancel,
    cancelText,
    onConfirm,
    confirmText,
    isVisible
}: ConfirmProps) => {
    const confirm = confirmText || i18n.t('OK');
    const cancel = cancelText || i18n.t('CANCEL');
    return (
        <ThemeConsumer<Theme>>
            {({ theme }) => {
                const { colors } = theme;
                return (
                    <Overlay
                        width={width * 0.8}
                        height="auto"
                        isVisible={isVisible}
                        onBackdropPress={onCancel}
                        containerStyle={styles.container}
                    >
                        <>
                            <View style={styles.bodyContainer}>
                                <Text centered textStyle="title">
                                    {title}
                                </Text>
                                <Text centered>{confirmation}</Text>
                            </View>
                            <View style={styles.buttons}>
                                <Button
                                    containerStyle={styles.button}
                                    title={confirm}
                                    onPress={onConfirm}
                                />
                                <Button
                                    buttonStyle={{
                                        backgroundColor: colors.error
                                    }}
                                    containerStyle={[styles.button]}
                                    title={cancel}
                                    onPress={onCancel}
                                />
                            </View>
                        </>
                    </Overlay>
                );
            }}
        </ThemeConsumer>
    );
};

export default Confirm;
