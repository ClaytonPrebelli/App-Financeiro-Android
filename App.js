import { StatusBar } from 'expo-status-bar';
import React, { lazy } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './components/Home';
import Topo from './components/Topo';
import AddDespesa from './components/AddDespesa';
const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Topo />
      <Drawer.Navigator screenOptions={{headerShown:false,}}>
    
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="AddDespesa" component={AddDespesa} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}


