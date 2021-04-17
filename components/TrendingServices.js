import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import Card from './Card'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const TrendingServices = ({image, text,num}) => {
    // console.log(text);
    return (
        <Card style={styles.container}>
            <TouchableOpacity>
                <View style={{alignItems:'center'}}>
                    <Image
                    source={image}
                    style={styles.image}
                    />
                </View>
                <View style={{alignItems:'center',marginTop:5}}>
                    <Text style={styles.text}>{text}</Text>
                    <View style={styles.numcontainer}>
                        <Text style={styles.num}>{num}</Text>
                        <Text> People booked in your area</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Card>
    )
}

export default TrendingServices

const styles = StyleSheet.create({
    container:{
        margin:10,
        // backgroundColor:"red",
        borderRadius:8
    },
    image:{
        width:180,
        height:200,
        // borderWidth:2,
        // borderColor:'#333333',
        // borderBottomStartRadius:50
    },
    text:{
        fontStyle:'italic',
        fontWeight:'bold',
        marginTop:10,
        marginBottom:20,
        fontSize:14
    },
    num:{
        color:"green"
    },
    numcontainer:{
        flexDirection:'row',
        borderTopWidth: 0.5,
        borderColor: 'lightgrey',
        marginTop:3
    }
})
