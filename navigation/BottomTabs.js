import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign,Ionicons,Entypo,FontAwesome,FontAwesome5 } from '@expo/vector-icons';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#f04679',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Help"
        component={Home}
        options={{
          tabBarLabel: 'Help',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="help-with-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyCar"
        component={Home}
        options={{
          tabBarLabel: 'MyCar',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="car" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Referral"
        component={Home}
        options={{
          tabBarLabel: 'Referral',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="hands-helping" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs