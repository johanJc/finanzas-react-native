import React from "react";
import Checkbox from 'expo-checkbox';
import { View, Text, StyleSheet } from "react-native";
// import CheckBox from '@react-native-community/checkbox';

import Constants from 'expo-constants';

const Main = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header_amounts}>
                <Text style={styles.current_value}>$950.000</Text>
                <View style={{ textAlign: 'right' }}>
                    <Text style={styles.text_date}>
                        15 de abril
                    </Text>
                    <Text style={styles.future_amount}>
                        $850.000
                    </Text>
                </View>
            </View>

            <View style={styles.box}>
                <Text style={styles.title_box}>Egresos fijos</Text>
                <View>
                    {/* Esta es la tabla */}
                    <View style={styles.row_justify}>
                        <Text style={styles.header_table}>Nombre</Text>
                        <Text style={styles.header_table}>Monto</Text>
                        <Text style={styles.header_table}>Pagado</Text>
                    </View>
                    <View style={styles.row_justify}>
                        <Text>Egreso 1</Text>
                        <Text>$15.000</Text>
                        <Checkbox/>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 0,
        paddingTop: 0,
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        gap: 10
    },
    header_amounts: {
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        gap: 10,
        justifyContent: 'space-between',
        marginTop: 10
        // backgroundColor: "#0f2"
    },
    current_value: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    future_amount: {
        fontSize: 20,
        color: 'red',
        fontWeight: '600'        
    },
    text_date: {
        textAlign: 'right',
        fontWeight: 'bold'
    },

    box: {
        width: '100%',
        margin: 'auto',
        borderRadius: 8,
        overflow: 'hidden',
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderWidth: 1.2,
        borderColor: '0f2'
    },
    title_box: {
        fontWeight: 'bold',
        fontSize: 22,
        alignSelf: 'center'
    },
    row_justify: {
        flexDirection: 'row',
        justifyContent: 'space-around',        
    },
    header_table: {
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
        marginTop: 10
    }
})

export default Main;