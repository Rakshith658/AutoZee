import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import Card from './Card'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const Services = ({data}) => {
    return (
        <Card style={{margin:10}}>
        <TouchableOpacity>
            <View style={{alignItems:'center'}}>
                <Image
                source={data.image}
                style={styles.image}
                />
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={styles.text}> {data.name}</Text>
            </View>
        </TouchableOpacity>
        </Card>
    )
}

export default Services

const styles = StyleSheet.create({
    image:{
        width:80,
        height:80,
        // borderWidth:2,
        // borderColor:'#333333',
        borderRadius:5
    },
    text:{
        fontStyle:'italic',
        fontWeight:'bold',
        marginTop:10,
        marginBottom:20,
        fontSize:14
    },
})
