import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import i18n from 'i18n-js';

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0
    }
});

export interface ShowMoreProps {
    onPress: () => void;
    title?: string;
}

const ShowMore = ({ title, onPress }: ShowMoreProps) => {
    return (
        <ListItem
            onPress={onPress}
            chevron
            rightTitle={title || i18n.t('SHOW_MORE')}
            containerStyle={styles.container}
        />
    );
};

export default React.memo(ShowMore);
