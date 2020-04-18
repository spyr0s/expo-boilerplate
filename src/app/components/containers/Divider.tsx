import React from 'react';
import { View } from 'react-native';
import { SPACING } from 'app/app/styles/sizes';
import { ThemeConsumer } from 'react-native-elements';
import { Theme } from 'styles/themes';

export interface DividerProps {
    size?: number;
    border?: boolean;
    color?: string;
}

const Divider = ({ size, border, color }: DividerProps) => {
    const paddingTop = size || SPACING.medium;
    const borderBottomWidth = border ? 1 : 0;
    return (
        <ThemeConsumer<Theme>>
            {({ theme }) => {
                const borderColor = color || theme.colors.onSurface;
                return (
                    <View
                        style={{
                            paddingTop,
                            borderBottomWidth,
                            borderColor
                        }}
                    />
                );
            }}
        </ThemeConsumer>
    );
};

export default Divider;
