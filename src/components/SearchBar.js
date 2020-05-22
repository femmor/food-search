import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import {FontAwesome} from "@expo/vector-icons"

const SearchBar = () => {
    return (
        <View style={styles.backgroundStyle}>
            <FontAwesome name="search" style={styles.iconStyle}/>
            <TextInput placeholder="Search restaurants near you..." style={styles.inputStyle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#f0eeee",
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: "row",
    },

    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 15
    },
    
    inputStyle: {
        flex: 1,
        fontSize: 18,
    }
})

export default SearchBar


