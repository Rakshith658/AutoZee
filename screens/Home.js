import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign,Ionicons } from '@expo/vector-icons';
import Summer from '../components/Summer';
import Trending from '../components/Trending';



const Stack = createStackNavigator();



const Home = () => {
    return (
        <ScrollView>
            <Summer/>
            <Trending/>
        </ScrollView>
    )
}

function HomeStackScreen() {
    return (
    //   <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Feed" component={Home} options={{
                headerRightContainerStyle:{
                    marginRight:13
                },
                headerTitle:()=>(
                    <Text style={{fontWeight:'bold',fontSize:18,fontStyle:'italic',color:'#f04679'}}>AutoZee</Text>
                ),
                headerTitleAlign:"center",
                headerRight:()=>(
                    <AntDesign name="car" size={24} color='grey' />
                ),
                headerLeft:()=>(
                    <Ionicons name="location-sharp" size={24} color='grey' />
                ),
                headerLeftContainerStyle:{
                    marginLeft:13
                }
            }}
          />
        </Stack.Navigator>
    //   </NavigationContainer>
    );
  }

export default HomeStackScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
