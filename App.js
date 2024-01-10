import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import FurnitureScreen from './screens/FurnitureScreen';
import DetailScreen from './screens/DetailScreen';
import ContactScreen from './screens/ContactScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Furniture" component={FurnitureScreen}/>
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
          <Stack.Screen name="Cart" component={FavoritesScreen} />
        </Stack.Navigator>
      </NavigationContainer> 
    );
}
