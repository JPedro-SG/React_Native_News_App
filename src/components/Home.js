import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet, Image, FlatList} from 'react-native'
import axios from 'axios'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1
    },
    titleSection: {
        // width: "100%",
        // height: 100,
        flex: 1,
        // backgroundColor: "yellow",
        // paddingLeft: 20,
        // paddingTop: 20
    }, 

    title: {
        // backgroundColor: "orange",
        paddingLeft: 20,
        paddingTop: 20,
        color: "#000",
        fontWeight: "700",
        fontSize: 23,
        
    },

    mostPopular: {
        
        flex: 2,
        
    },  
    popularSection: {
        // width: "100%",
        height: 160,
        marginRight: 15,
        marginLeft: 7,
        padding: 10,
        borderRadius: 10,
        // justifyContent: 'space-between'
        
        // backgroundColor: "green"
    }, 
    popularImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
        borderBottomLeftRadius: 5,

        // resizeMode: 'contain',
    }, 
    popularText:{
        fontWeight: "700",
        textAlign: 'left',
        // marginLeft: 5
    },
    recomendedSection: {
        flex: 4,
    }, 
    recomendedTitle: {
        // flex: 2,
        paddingLeft: 20,
        paddingTop: 10,
        fontWeight: "700",
        fontSize: 15,
        color: "#8A8A8A"
    },
    
})

export default HomeScreen