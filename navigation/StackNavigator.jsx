import React, { useEffect, useState } from 'react';
import { createStackNavigator, useRoute } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AboutScreen from '../screens/AboutScreen';
import CameraScreen from '../screens/CameraScreen';
import DashboardScreen from '../screens/DashboardScreen';
import DrawerIcon from './DrawerIcon';
import BarcodeScreen from '../screens/BarcodeScreen';
import { getFocusedRouteNameFromRoute, useNavigationState } from '@react-navigation/native';

const Stack = createStackNavigator();

export function HomeStack({ navigation, route }) {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
               title: 'Home', //Set Header Title
               headerLeft: () => (
                  <DrawerIcon navigationProps={navigation} />
               ),
            }}
         />
         <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
         />
      </Stack.Navigator>
   )
}

export function ProfileStack({ navigation, route }) {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
         />
      </Stack.Navigator>
   )
}


export function CameraStack({ navigation }) {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="CameraScreen"
            component={CameraScreen}
            options={{
               title: 'Camera Page', //Set Header Title
               headerLeft: () => (
                  <DrawerIcon navigationProps={navigation} />
               ),
            }}
         />
      </Stack.Navigator>
   )
}

export function BarcodeStack({ navigation }) {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="BarcodeScreen"
            component={BarcodeScreen}
            options={{
               title: 'Barcode Scanner', //Set Header Title
               headerLeft: () => (
                  <DrawerIcon navigationProps={navigation} />
               ),
            }}
         />
      </Stack.Navigator>
   )
}

export function DashboardStack({ navigation }) {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="DashboardScreen"
            component={DashboardScreen}
            options={{
               headerLeft: () => (
                  <DrawerIcon navigationProps={navigation} />
               ),
               title: 'Dashboard', //Set Header Title
            }}
         />
         <Stack.Screen
            name="AboutScreen"
            component={AboutScreen}
         />
      </Stack.Navigator >
   )
}