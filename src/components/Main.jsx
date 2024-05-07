import React, { useState } from "react";
import Checkbox from 'expo-checkbox';
import { View, Text, StyleSheet } from "react-native";
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';

const Main = () => {
    // const [fontsLoaded] = useFonts({
    //     Caveat: require('./assets/fonts/Caveat.ttf')
    // });
    const [data, setData] = useState([
        { nombre: 'Egreso 1', monto: '$15.000', pagado: false },
        { nombre: 'Egreso 2', monto: '$20.000', pagado: true },
        // Agrega más datos según necesites
    ]);

    const handleCheckboxChange = (index) => {
        const newData = [...data];
        newData[index].pagado = !newData[index].pagado;
        setData(newData);
    }

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
                <View style={styles.row_justify}>
                    <Text style={[styles.header_table, styles.cell]}>Nombre</Text>
                    <Text style={[styles.header_table, styles.cell]}>Monto</Text>
                    <Text style={[styles.header_table, styles.cell]}>Pagado</Text>
                </View>
                {/* Renderización dinámica de filas */}
                {data.map((item, index) => (
                    <View style={styles.row_justify} key={index}>
                        <Text style={styles.table_td}>{item.nombre}</Text>
                        <Text style={styles.table_td}>{item.monto}</Text>
                        <View style={{ width: '33%', justifyContent: 'center' }}>
                            <Checkbox value={item.pagado} style={{ alignSelf: 'center', marginTop: 5 }}
                                onValueChange={() => handleCheckboxChange(index)} />
                        </View>
                    </View>
                ))}
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
        gap: 10,
        // fontFamily: 'Caveat'
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
        // justifyContent: 'space-around',
        // backgroundColor: '#2fa'
    },
    header_table: {
        fontWeight: 'bold',
        fontSize: 18,
        // alignSelf: 'center',
        marginTop: 10,
        width: '33%',
        textAlign: 'center'
    },
    table_td: {
        fontSize: 18,
        // alignSelf: 'center',
        width: '33%',
        textAlign: 'center',
        marginTop: 5
    }
})

export default Main;