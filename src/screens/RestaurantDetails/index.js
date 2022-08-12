import React from 'react';
import {View, Text} from 'react-native';
import MenuItem from '../../components/RestaurantComponents/MenuItem';
import About from '../../components/RestaurantComponents/About';
import CheckoutButton from '../../components/RestaurantComponents/CheckoutButton';

const RestaurantDetails = navigation => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#eee',
      }}>
      <About image={navigation.route.params} />
      <MenuItem />
      <CheckoutButton />
    </View>
  );
};

export default RestaurantDetails;
