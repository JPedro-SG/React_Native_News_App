import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
EStyleSheet.build()

export default props => {
    let styleContainer = styles.container_common
    let styleImg = styles.img_common
    if(props.first) styleContainer = styles.container_first
    if(props.first) styleImg = styles.img_first

    return (
        <View style={styleContainer}>
            <View style={styles.text_Section}>
                <Text style={styles.category}>{props.category}</Text>
                <Text style={styles.title}>{props.label}</Text>
            </View>
            <Image style={styleImg} source={props.img}/>
        </View>
    )
} 

const styles = EStyleSheet.create({
    container_common: {
        flexDirection: "row",
        paddingTop: '1.25rem',
        paddingBottom: '1.25rem',
        marginRight: '1.25rem',
        marginLeft: '1.25rem',
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor: "blue" ,
        borderRadius: 1,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },
    img_common: {
        width: '4rem',
        height: '4rem',
        resizeMode: "cover",
        borderRadius: 3,
    },
    container_first: {
        flexDirection: "column-reverse",
        paddingTop: '1.25rem',
        paddingBottom: '1.25rem',
        marginRight: '1.25rem',
        marginLeft: '1.25rem',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        borderRadius: 1,
        
    },
    img_first: {
        resizeMode: "cover",
        width: "100%",
        height: '13rem', 
        // height: 200, 
        marginBottom: '0.625rem',
        borderRadius: 3,
    },
    title: {
        fontSize: '1.25rem',
        fontWeight: "500",
        textTransform: "capitalize",
        // backgroundColor: "green" 
    },
    category:{
        fontWeight: "700", 
        textTransform: "uppercase",
        fontSize: '0.75rem',
        marginBottom: 1
    }, 
    text_Section: {
        width: '15rem',
        // backgroundColor: "green",
        minHeight: '4rem', 
    }
})