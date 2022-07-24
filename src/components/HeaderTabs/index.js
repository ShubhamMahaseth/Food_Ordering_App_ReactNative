import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {AuthContext, AuthProvider} from '../../navigation/AuthProvider';

const HeaderButton = ({activeTab, setActiveTab}) => {
  const [activeButton, setActiveButton] = useState('Delivery');
  // console.log(props);

  const {logout} = useContext(AuthContext);

  const data = [
    {
      id: 1,
      title: 'Delivery',
      backgroundColor: activeTab == 'Delivery' ? 'black' : 'white',
      textColor: activeTab == 'Delivery' ? 'white' : 'black',
    },
    {
      id: 2,
      title: 'Pickup',
      backgroundColor: activeTab == 'Pickup' ? 'black' : 'white',
      textColor: activeTab == 'Pickup' ? 'white' : 'black',
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
            // setActiveButton(item.title);
            setActiveTab(item.title);
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

const HeadersTabs = ({activeTab, setActiveTab}) => {
  console.log(activeTab, setActiveTab);
  return (
    <View>
      <HeaderButton activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

export default HeadersTabs;
