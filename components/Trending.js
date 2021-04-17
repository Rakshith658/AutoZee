import * as React from 'react';
import { View, Text, Button, Image,StyleSheet,  FlatList, } from 'react-native';
import Card from './Card';
import TrendingServices from './TrendingServices';

const data=[{
    name: 'PERIODIC SERVICE',
    image: require('../assets/images/ModelS.jpeg'),
    num:1222
  }, {
    name: 'CAR DETAILING',
    image: require('../assets/images/Model3.jpeg'),
    num:233
  }, {
    name: 'TYRE REPLACEMENT',
    image: require('../assets/images/ModelX.jpeg'),
    num:5432
  }, {
    name: 'DEEP ALL ROUND SPA',
    image: require('../assets/images/ModelY.jpeg'),
    num:4321
}];


function Trending() {
// console.log(data);
    return (
        <Card style={{padding:10}}>
            <Text style={{fontWeight:'bold',fontSize:20,fontStyle:'italic',}}>Trending Services</Text>
            <Text style={{fontWeight:'bold',fontSize:18,fontStyle:'italic',color:'grey'}}>Most booked services around you</Text>
            <View style={styles.container}>
                <FlatList
                    data={data} 
                    keyExtractor={(item)=>item.name}
                    renderItem={({item})=><TrendingServices image={item.image} text={item.name} num={item.num}/>}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </Card>
    );
}

export default Trending;

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        // padding:10
        // borderBottomColor:'red'
    },
})
