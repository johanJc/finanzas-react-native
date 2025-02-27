import React from "react";
import Constants from 'expo-constants';
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: '#a2f',
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10
    }
})

const AppBar = () => {
    return(
        <View style={styles.appBar}>
            <Text></Text>
        </View>
    )
}

export default AppBar;