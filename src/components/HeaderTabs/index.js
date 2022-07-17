import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const HeaderButton = () => {
  const [activeButton, setActiveButton] = useState('Delivery');
  console.log(activeButton);
  const data = [
    {
      id: 1,
      title: 'Delivery',
      backgroundColor: activeButton == 'Delivery' ? 'black' : 'white',
      textColor: activeButton == 'Delivery' ? 'white' : 'black',
    },
    {
      id: 2,
      title: 'Pickup',
      backgroundColor: activeButton == 'Pickup' ? 'black' : 'white',
      textColor: activeButton == 'Pickup' ? 'white' : 'black',
    },
  ];
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{
            borderRadius: 20,
            width: 120,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: item.backgroundColor,
          }}
          onPress={() => {
            setActiveButton(item.title);
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: item.textColor,
            }}>
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const HeadersTabs = () => {
  return (
    <View>
      <HeaderButton />
    </View>
  );
};

export default HeadersTabs;
