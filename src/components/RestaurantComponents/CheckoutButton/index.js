import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

const CheckoutButton = () => {
  const value = useSelector(state => state.cartSlice.selectedItems.items);

  let totalValue = 0;
  function cartValue(totalValue, value) {
    for (let i = 0; i < value.length; i++) {
      totalValue = totalValue + value[i];
    }
    return totalValue.toFixed(2);
  }

  return (
    <>
      {value.length > 0 ? (
        <TouchableOpacity
          activeOpacity={0.9}
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
            flexDirection: 'row',
          }}
          onPress={() => console.log(value)}>
          <Text
            style={{
              color: 'white',
              fontWeight: '500',
              fontSize: 18,
            }}>
            Checkout
          </Text>
          <Text
            style={{color: 'white', fontWeight: '500', fontSize: 18, left: 60}}>
            {cartValue(totalValue, value)}
          </Text>
        </TouchableOpacity>
      ) : null}
    </>
  );
};

export default CheckoutButton;
