import { Colors, Theme as RNETheme } from 'react-native-elements';
import { ViewStyle } from 'react-native';
import { ColorSchemeName } from 'react-native-appearance';
import tinyColor from 'tinycolor2';
import { ThemeColors } from 'react-navigation';
import { SPACING, FONT_SIZE, LINE_HEIGHT, ICON_SIZE } from './sizes';

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
    scheme: ColorSchemeName;
}

export const light: ThemeColors = {
    primary: '#ed1c24',
    primaryVariant: '#370083',
    secondary: '#03DAC6',
    secondaryVarian: '#018786',
    background: '#EEEEEE',
    surface: '#FFFFFF',
    error: '#B00020',
    onPrimary: '#FFFFFF',
    onSecondary: '#000000',
    onBackground: '#000000',
    onSurface: '#000000',
    onError: '#FFFFFF'
};

export const dark: ThemeColors = {
    primary: '#ed1c24',
    primaryVariant: '#370083',
    secondary: '#03DAC6',
    secondaryVarian: '#018786',
    background: '#000000',
    surface: '#121212',
    error: '#CF6679',
    onPrimary: '#FFFFFF',
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
export const lowEmphasis = (color: string) => {
    return tinyColor(color)
        .setAlpha(LOW_EMPHASIS_OPACITY)
        .toString();
};

export const alpha = (color: string, alpha: number) => {
    return tinyColor(color)
        .setAlpha(alpha)
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
    const backgroundColor = tinyColor(color)
        .lighten(lighten)
        .toString();
    const style = {
        ...shadow(elevation),
        elevation,
        backgroundColor
    };
    return style;
};

export const createTheme = (scheme: ColorSchemeName): Theme => {
    const colors = scheme === 'dark' ? dark : light;
    return {
        scheme,
        colors,
        Text: {
            style: {
                color: colors.onSurface
            }
        },
        Avatar: {
            containerStyle: {
                borderColor: disabled(colors.onSurface),
                borderWidth: 1
            },
            placeholderStyle: {
                backgroundColor: colors.onSurface
            },
            titleStyle: {
                color: colors.surface
            }
        },
        Badge: {
            textStyle: {
                color: colors.onPrimary,
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
        Header: {
            containerStyle: {
                backgroundColor: colors.primary
            },
            centerComponent: {
                style: {
                    color: colors.onPrimary,
                    fontSize: FONT_SIZE.larger,
                    lineHeight: LINE_HEIGHT.larger,
                    fontWeight: '600'
                }
            }
        },
        Icon: {
            color: colors.onSurface,
            size: ICON_SIZE.normal
        },
        Input: {
            placeholderTextColor: disabled(colors.onBackground),
            inputStyle: {
                color: colors.onBackground,
                fontSize: FONT_SIZE.large
            },
            errorStyle: { fontSize: FONT_SIZE.normal },
            containerStyle: { marginBottom: SPACING.medium }
        },
        ListItem: {
            underlayColor: cardStyle(scheme, 1).backgroundColor,
            contentContainerStyle: {
                marginVertical: SPACING.small * 0.2
            },
            containerStyle: {
                ...cardStyle(scheme, 1),
                borderBottomWidth: 1,
                borderBottomColor: tinyColor(colors.onSurface)
                    .setAlpha(0.2)
                    .toString()
            },
            titleStyle: {
                color: colors.onSurface,
                fontSize: FONT_SIZE.normal,
                lineHeight: LINE_HEIGHT.normal
            },
            subtitleStyle: {
                color: lowEmphasis(colors.onSurface),
                fontSize: FONT_SIZE.small,
                lineHeight: LINE_HEIGHT.small
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
        },
        Overlay: {
            overlayStyle: {
                padding: 0,
                ...cardStyle(scheme, 2),
                borderWidth: 1,
                borderColor: tinyColor(colors.onSurface)
                    .setAlpha(0.2)
                    .toString(),
                borderRadius: 5
            }
        },
        SearchBar: {
            containerStyle: {
                backgroundColor: colors.surface
            },
            inputStyle: {
                color: colors.onSurface,
                // ...cardStyle(scheme, 2),
                backgroundColor: colors.surface,
                borderColor: alpha(colors.onSurface, 0.2),
                borderRadius: 5,
                paddingHorizontal: SPACING.small,
                borderWidth: 1
            },
            inputContainerStyle: {
                backgroundColor: colors.surface
            },
            // leftIconContainerStyle: {
            //     // backgroundColor: 'green'
            // },
            // rightIconContainerStyle: {
            //     // backgroundColor: 'pink'
            // },
            loadingProps: {
                color: colors.onSurface
            },
            searchIcon: { size: ICON_SIZE.medium, name: 'search' }
        }
    };
};
