import { AntDesign,MaterialIcons,Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen/Index';
import MovieDetailsScreen from '../screens/MovieDetailsScreen/index';

import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList,HomeParamList, TabTwoParamList } from '../types';
import {DarkTheme} from '@react-navigation/native'
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator

      initialRouteName="Home"
     
      tabBarOptions={{ activeTintColor:'#fff',style:{backgroundColor:'black'},activeBackgroundColor:"black"}}
      >
      <BottomTab.Screen

      
        name="Home"
        component={TabOneNavigator}
        options={{
      
          tabBarIcon: ({ color }) => <AntDesign name="home" color={color} size={24} style={{marginBottom:3}}/>,
        }}
      />
      <BottomTab.Screen
        name="Coming_Soon"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => < MaterialIcons name="video-library" color={color} size={24} style={{marginBottom:3}}/>,
        }}
      />
          <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => < Ionicons name="search" color={color} size={24} style={{marginBottom:3}}/>,
        }}
      />
          <BottomTab.Screen

        name="Downloads"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="download" color={color} size={24} style={{marginBottom:3}}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function TabOneNavigator() {
  return (
    <HomeStack.Navigator
  >
  <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
  options={{headerShown:false}}
      />
      <HomeStack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
  options={{title:'Hello',
  headerStyle:{
    backgroundColor:'black'
  }
  
}}
      />
        
    </HomeStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{headerShown:false}}
      />
    </TabTwoStack.Navigator>
  );
}
