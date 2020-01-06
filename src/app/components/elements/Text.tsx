import React, { PropsWithChildren, useContext } from 'react';
import {
    TextProps as RNTextProps,
    Text,
    ThemeProps,
    ThemeContext
} from 'react-native-elements';
import { LINE_HEIGHT, FONT_SIZE } from 'styles/sizes';
import { Theme } from 'app/app/styles/themes';

export type TextStyle = 'nano' | 'small' | 'normal' | 'large' | 'larger';

export interface TextProps {
    textStyle?: TextStyle;
    bold?: boolean;
    centered?: boolean;
    light?: boolean;
    color?: string;
}

type Props = TextProps & RNTextProps & PropsWithChildren<TextProps>;

const getStyle = (textStyle: TextStyle) => {
    switch (textStyle) {
        case 'nano':
            return {
                fontSize: FONT_SIZE.nano,
                lineHeight: LINE_HEIGHT.nano
            };
        case 'small':
            return {
                fontSize: FONT_SIZE.small,
                lineHeight: LINE_HEIGHT.small
            };
        case 'normal':
        default:
            return {
                fontSize: FONT_SIZE.normal,
                lineHeight: LINE_HEIGHT.normal
            };
        case 'large':
            return {
                fontSize: FONT_SIZE.large,
                lineHeight: LINE_HEIGHT.large
            };
        case 'larger':
            return {
                fontSize: FONT_SIZE.larger,
                lineHeight: LINE_HEIGHT.larger
            };
    }
};

export default (props: Props) => {
    const {
        children,
        style: propStyle,
        textStyle,
        bold,
        light,
        centered,
        color
    } = props;
    const style = getStyle(textStyle);
    const textAlign = centered ? 'center' : 'left';

    const fontWeight = light ? '200' : bold ? '600' : '400';

    const { theme } = useContext(ThemeContext) as ThemeProps<Theme>;

    const colorsStyle = color ? { color } : { color: theme.colors.onSurface };

    return (
        <Text
            {...props}
            style={[
                style,
                { fontWeight },
                { textAlign },
                propStyle,
                colorsStyle
            ]}
        >
            {children}
        </Text>
    );
};
