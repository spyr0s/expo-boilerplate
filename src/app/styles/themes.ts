import { Colors, Theme as RNETheme } from 'react-native-elements';
import { ViewStyle } from 'react-native';
import { ColorSchemeName } from 'react-native-appearance';
import tinyColor from 'tinycolor2';
import { SPACING, FONT_SIZE } from './sizes';

export const HIGH_EMPHASIS_OPACITY = 0.87;
export const LOW_EMPHASIS_OPACITY = 0.6;
export const DISABLED_OPACITY = 0.38;
export const BACDROP_OPACITY = 0.2;

export interface ThemeColors extends Partial<Colors> {
    primary: string;
    primaryVariant: string;
    secondary: string;
    secondaryVarian: string;
    background: string;
    surface: string;
    error: string;
    onPrimary: string;
    onSecondary: string;
    onBackground: string;
    onSurface: string;
    onError: string;
}

export interface Theme extends RNETheme {
    colors: ThemeColors;
}

export const light: ThemeColors = {
    primary: '#6200EE',
    primaryVariant: '#370083',
    secondary: '#03DAC6',
    secondaryVarian: '#018786',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    error: '#B00020',
    onPrimary: '#FFFFFF',
    onSecondary: '#000000',
    onBackground: '#000000',
    onSurface: '#000000',
    onError: '#FFFFFF'
};

export const dark: ThemeColors = {
    primary: '#BB86FC',
    primaryVariant: '#3700B3',
    secondary: '#03DAC6',
    secondaryVarian: '#03DAC6',
    background: '#121212',
    surface: '#121212',
    error: '#CF6679',
    onPrimary: '#000000',
    onSecondary: '#000000',
    onBackground: '#FFFFFF',
    onSurface: '#FFFFFF',
    onError: '#000000'
};

export const highEmphasis = (color: string) => {
    return tinyColor(color)
        .setAlpha(HIGH_EMPHASIS_OPACITY)
        .toString();
};
export const LowEmphasis = (color: string) => {
    return tinyColor(color)
        .setAlpha(LOW_EMPHASIS_OPACITY)
        .toString();
};
export const disabled = (color: string) => {
    return tinyColor(color)
        .setAlpha(DISABLED_OPACITY)
        .toString();
};
export const backdrop = (color: string, opacity: number = BACDROP_OPACITY) => {
    return tinyColor(color)
        .setAlpha(opacity)
        .toString();
};

export const shadow = (elevation: number) => ({
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation
});

export const cardStyle = (
    scheme: ColorSchemeName,
    elevation: number
): ViewStyle => {
    const elevate = Math.min(elevation, 24);
    const lighten = scheme === 'dark' ? elevate * 4 : 0;
    const color = scheme === 'dark' ? dark.surface : light.surface;
    const style = {
        ...shadow(elevation),
        elevation,
        backgroundColor: tinyColor(color)
            .lighten(lighten)
            .toString()
    };
    return style;
};

export const createTheme = (colors: ThemeColors): Theme => {
    return {
        colors,
        Text: {
            style: {
                color: colors.onSurface
            }
        },
        Badge: {
            textStyle: {
                color: colors.secondary,
                width: 30,
                textAlign: 'center',
                paddingHorizontal: SPACING.small * 0.5
            },
            containerStyle: {
                marginHorizontal: SPACING.small * 0.2,
                justifyContent: 'center',
                alignItems: 'center'
            },
            badgeStyle: {
                borderWidth: 0
            }
        },
        Icon: {
            color: colors.onSurface
        },
        Button: {
            disabledStyle: { opacity: 0.5 },
            buttonStyle: {
                marginVertical: SPACING.medium,
                borderRadius: 3,
                backgroundColor: colors.primary
            },
            titleStyle: {
                color: colors.onPrimary
            },
            titleProps: { numberOfLines: 1, ellipsizeMode: 'tail' }
        },
        ListItem: {
            style: {
                backgroundColor: colors.surface
            },
            containerStyle: {
                borderBottomWidth: 1,
                borderBottomColor: tinyColor(colors.primary)
                    .setAlpha(0.8)
                    .toString(),
                paddingVertical: SPACING.medium
            },
            titleStyle: {
                color: colors.onSurface,
                fontSize: FONT_SIZE.normal
            },
            subtitleStyle: {
                color: LowEmphasis(colors.onSurface),
                fontSize: FONT_SIZE.small
            },
            leftIcon: {
                iconStyle: {
                    color: colors.onSurface
                }
            },
            rightTitleStyle: {
                color: highEmphasis(colors.onSurface),
                fontSize: FONT_SIZE.normal
            }
        }
    };
};
