import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator, View, Dimensions } from 'react-native';
import { ThemeContext, ThemeProps } from 'react-native-elements';
import { Theme } from 'app/app/styles/themes';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        opacity: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        height,
        width,
        flex: 1
    }
});

export interface ScreenLoaderProps {
    size?: 'large' | 'small';
}

const ScreenLoader = ({ size }: ScreenLoaderProps) => {
    const {
        theme: { colors }
    } = useContext(ThemeContext) as ThemeProps<Theme>;

    return (
        <View
            style={[styles.container, { backgroundColor: colors.background }]}
        >
            <ActivityIndicator size={size} color={colors.onSurface} />
        </View>
    );
};
ScreenLoader.defaultProps = {
    size: 'large'
};
export default ScreenLoader;
