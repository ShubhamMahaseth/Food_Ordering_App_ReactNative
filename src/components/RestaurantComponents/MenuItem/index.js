import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {increment, decrement} from '../../../redux/cartSlice/cartSlice';
import {useDispatch, useSelector} from 'react-redux';

const MenuItem = ({food, hideCheckbox = false}) => {
  const valueSelector = useSelector(
    state => state.cartSlice.selectedItems.restaurantName,
  );

  function checkTick(valueSelector, title) {
    for (let i = 0; i < valueSelector.length; i++) {
      if (valueSelector[i] == title) {
        return true;
      }
    }
  }

  const dispatch = useDispatch();

  function checkOnpress(item) {
    if (valueSelector.includes(item.title)) {
      dispatch(decrement(item));
    } else {
      dispatch(increment(item));
    }
  }

  return (
    <ScrollView bounces={false}>
      {food?.map((item, index) => (
        <View
          style={{
            borderTopWidth: 0.3,
            borderColor: 'gray',

            backgroundColor: 'white',
            maxHeight: 130,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-around',
            overflow: 'hidden',
            elevation: 3,
            flexDirection: 'row-reverse',
          }}
          key={index}>
          <View
            style={{
              width: '22%',
              height: '80%',

              marginRight: 10,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
              }}
              source={{uri: item.image}}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'transparent',

              marginRight: 10,
              width: '60%',
            }}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              {item.title}
            </Text>

            <Text style={{color: 'black', fontWeight: '400', fontSize: 15}}>
              {item.description}
            </Text>
            <Text
              style={{
                color: 'black',
                fontWeight: '500',
                fontSize: 18,
                marginTop: 5,
                fontWeight: '500',
              }}>
              ₹{item.price}
            </Text>
          </View>
          {hideCheckbox ? null : (
            <CheckBox
              checked={checkTick(valueSelector, item.title)}
              checkedColor={'green'}
              onPress={() => {
                checkOnpress(item);
              }}
            />
          )}
        </View>
      ))}
    </ScrollView>
  );
};
export default MenuItem;
