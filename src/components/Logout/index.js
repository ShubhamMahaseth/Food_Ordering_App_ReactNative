import React, {useContext} from 'react';
import {Text, View, TouchableOpacity, StatusBar} from 'react-native';
import {AuthContext} from '../../navigation/AuthProvider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Logout = () => {
  const {logout} = useContext(AuthContext);

  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
          activeOpacity={0.7}
          style={{
            borderRadius: 8,
            width: '70%',
            height: '10%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e5cccc',
            flexDirection: 'row',
          }}>
          <MaterialCommunityIcons name={'logout'} color={'gray'} size={25} />
          <Text
            style={{
              color: 'gray',
              fontWeight: '500',
              fontSize: 18,
              marginLeft: 10,
            }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Logout;
