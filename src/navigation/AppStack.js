import React from 'react';
import Home from '../screens/Home';
import RestaurantDetails from '../screens/RestaurantDetails';
import LogoutScreen from '../screens/LogoutScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LogoutScreen"
        component={LogoutScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
