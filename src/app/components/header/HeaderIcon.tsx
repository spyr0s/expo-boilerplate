import React, { useContext } from 'react';
import { ThemeContext, Icon, ThemeProps } from 'react-native-elements';
import { Theme } from 'app/app/styles/themes';
import { ICON_SIZE, SPACING } from 'app/app/styles/sizes';
import { TouchableOpacity } from 'react-native';

export interface HeaderIconProps {
    name: string;
    type?: string;
    onPress?: () => void;
    size?: number;
    color?: string;
    disabled?: boolean;
}

const HeaderIcon = ({
    name,
    type,
    color,
    onPress,
    size,
    disabled
}: HeaderIconProps) => {
    const { theme } = useContext(ThemeContext) as ThemeProps<Theme>;
    const iconColor = color || theme.colors.onPrimary;
    const iconSize = size || ICON_SIZE.small;
    return (
        <TouchableOpacity {...{ onPress, disabled }}>
            <Icon
                {...{
                    name,
                    type,
                    color: iconColor,
                    size: iconSize,
                    containerStyle: {
                        paddingRight: SPACING.small,
                        opacity: disabled ? 0.5 : 1
                    }
                }}
            />
        </TouchableOpacity>
    );
};

HeaderIcon.defaultProps = {
    disabled: false,
    type: 'feather',
    onPress: () => {}
};
export default HeaderIcon;
