import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const CheckoutButton = () => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        position: 'absolute',
        backgroundColor: 'black',
        left: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 22,
        bottom: 38,
        width: '76%',
      }}>
      <Text style={{color: 'white', fontWeight: '500', fontSize: 18}}>
        Checkout
      </Text>
    </TouchableOpacity>
  );
};

export default CheckoutButton;
