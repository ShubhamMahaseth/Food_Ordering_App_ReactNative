import React from 'react';
import Home from '../screens/Home';
import RestaurantDetails from '../screens/RestaurantDetails';
import LogoutScreen from '../screens/LogoutScreen';
import OrderCompleted from '../screens/OrderCompleted';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from '../redux/store/store';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Provider store={store}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{gestureEnabled: true}}>
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
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderCompleted"
          component={OrderCompleted}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </Provider>
  );
};

export default AppStack;
