import * as React from 'react';
import { View, Text, Button, Image,StyleSheet, TouchableOpacity, FlatList, } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Services from './Services';
import Card from './Card';

const server=[{
    name: 'Ac Service',
    image: require('../assets/images/ModelS.jpeg'),
  }, {
    name: 'Car Spa',
    image: require('../assets/images/Model3.jpeg'),
  }, {
    name: 'Meguiars Ceramic',
    image: require('../assets/images/ModelX.jpeg'),
  }, {
    name: 'Miles Membership',
    image: require('../assets/images/ModelY.jpeg'),
}];


function Summer() {

    return (
        <Card style={{padding:10}}>
            <Text style={{fontWeight:'bold',fontSize:18,fontStyle:'italic',}}>GoMechanic Summer Spice</Text>
            <Text style={{fontWeight:'bold',fontSize:14,fontStyle:'italic',color:'grey'}}>Hand-Picked Car Services For Your Summer Needs</Text>
            <View style={styles.container}>
              <View style={{flexDirection:"row"}}>
                <Services data={server[0]}/>
                <Services data={server[2]}/> 
              </View>
              <View style={{flexDirection:"row"}}>
                <Services data={server[1]}/>
                <Services data={server[3]}/>
              </View>
            </View>
      </Card>
    );
}

export default Summer;

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        // padding:10
        // borderBottomColor:'red'
    },
  image:{
    width:180,
    height:140,
    // borderWidth:2,
    // borderColor:'#333333',
    borderRadius:5
  },
  text:{
    fontStyle:'italic',
    fontWeight:'bold',
    marginTop:10,
    marginBottom:20,
    fontSize:20
  },
  clm:{
    marginLeft:30,
    marginTop:30,
    flexDirection:'column'
  },
  gamescore:{
    alignItems:'center',
    //marginTop:20,
    backgroundColor:"#333"
  },
  gametext:{
    fontSize:35,
    fontWeight:"bold",
    fontStyle:"italic",
    color:'#ffffff'
  }
})
