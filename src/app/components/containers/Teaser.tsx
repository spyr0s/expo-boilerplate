import React from 'react';
import { View, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import Text from 'app/app/components/elements/Text';
import ShowMore from 'app/app/components/elements/ShowMore';
import { SPACING } from 'app/app/styles/sizes';

const styles = StyleSheet.create({
    container: {
        paddingBottom: SPACING.large
    }
});
export interface TeaserProps<P> {
    title: string;
    data: P[];
    renderItem: (item: P) => JSX.Element;
    showMore: boolean;
    onPress: () => void;
}

const Teaser = <P extends Object>({
    showMore,
    title,
    data,
    renderItem,
    onPress
}: TeaserProps<P>) => {
    return (
        <View style={styles.container}>
            <View>
                <Text centered textStyle="doubleTitle">
                    {title}
                </Text>
            </View>
            {data.map(item => renderItem(item))}
            {showMore && <ShowMore onPress={onPress} />}
        </View>
    );
};

export default React.memo(withNavigation(Teaser));
