import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { APP_STARTED } from 'app/app/redux/app/actions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Text>{APP_STARTED}</Text>
        </View>
    );
}
