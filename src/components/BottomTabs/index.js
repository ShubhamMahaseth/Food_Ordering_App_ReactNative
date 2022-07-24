import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = ({navigation}) => {
  const [activeBottomTab, setActiveBottonTab] = useState('Home');
  const bottomTabData = [
    {
      id: 1,
      tabName: 'Home',
      iconName: 'home',
      iconColor: activeBottomTab == 'Home' ? 'black' : 'gray',
      textColor: activeBottomTab == 'Home' ? 'black' : 'gray',
      onPress: () => {
        console.log('kk');
      },
    },
    {
      id: 2,
      tabName: 'Browse',
      iconName: 'search',
      iconColor: activeBottomTab == 'Browse' ? 'black' : 'gray',
      textColor: activeBottomTab == 'Browse' ? 'black' : 'gray',
      onPress: () => {
        console.log('kk');
      },
    },
    {
      id: 3,
      tabName: 'Grocery',
      iconName: 'shopping-bag',
      iconColor: activeBottomTab == 'Grocery' ? 'black' : 'gray',
      textColor: activeBottomTab == 'Grocery' ? 'black' : 'gray',
      onPress: () => {
        console.log('kk');
      },
    },
    {
      id: 4,
      tabName: 'Orders',
      iconName: 'receipt',
      iconColor: activeBottomTab == 'Orders' ? 'black' : 'gray',
      textColor: activeBottomTab == 'Orders' ? 'black' : 'gray',
      onPress: () => {
        console.log('kk');
      },
    },
    {
      id: 5,
      tabName: 'Account',
      iconName: 'user',
      iconColor: activeBottomTab == 'Account' ? 'black' : 'gray',
      textColor: activeBottomTab == 'Account' ? 'black' : 'gray',
      onPress: () => {
        navigation.navigate('LogoutScreen');
      },
    },
  ];

  // console.log(activeBottomTab);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        width: '100%',
        paddingBottom: 10,
        paddingTop: 10,
        borderTopWidth: 0.5,
        elevation: 8,
        borderTopColor: '#eee',
      }}>
      {bottomTabData.map((item, index) => (
        <TouchableOpacity
          activeOpacity={0.5}
          style={{justifyContent: 'center', alignItems: 'center'}}
          key={index}
          onPress={() => {
            setActiveBottonTab(item.tabName), item.onPress();
          }}>
          <FontAwesome5 name={item.iconName} color={item.iconColor} size={25} />
          <Text style={{color: item.textColor, fontWeight: '500'}}>
            {item.tabName}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const BottomTabs = ({navigation}) => {
  return <Tab navigation={navigation} />;
};

export default BottomTabs;
