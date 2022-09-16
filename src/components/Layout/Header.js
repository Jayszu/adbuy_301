import { Dimensions, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'



var { width } = Dimensions.get('window');

const Header = () => {
    return (
        <View style={styles.headerMain}>
            <View style={styles.headerFlex}>
                
                <TextInput placeholder='Search...' placeholderTextColor='gray' style={styles.searchbox} />
                <TouchableOpacity>
                    <Icon name="search-outline" size={20} style ={styles.searchIcon}/>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerMain: {
        width: width,
        height: width / 4 - 30,
        backgroundColor: 'white',
        elevation: 8,
        paddingVertical: 10

    },
    headerFlex: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchbox: {
        width: width - 80,
        height: width / 7 - 10,
        backgroundColor: "#e5e5e5",
        marginHorizontal: 40,
        borderRadius: 15,
        fontSize: 15,
        paddingHorizontal: 10,
        position: 'relative',
       
    },
    searchIcon:{
        position:'absolute',
        bottom:-10,
        right:50,


    }


})