import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

// Components
import SearchBar from "../components/SearchBar"

const SearchScreen = ({ navigation }) => {
    return (
        <View style={styles.mainBG}>
            <SearchBar />
            <Text>Search Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainBG: {
        backgroundColor: "white"
    }
})

export default SearchScreen


