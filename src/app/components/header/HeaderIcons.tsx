import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderIcon, { HeaderIconProps } from './HeaderIcon';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export interface HeaderIconsProps {
    icons: HeaderIconProps[];
}

export default ({ icons }: HeaderIconsProps) => {
    return (
        <View style={styles.container}>
            {icons.map(icon => {
                return <HeaderIcon key={icon.name} {...icon} />;
            })}
        </View>
    );
};
