import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../../navigation/AuthProvider';
import {increment} from '../../redux/cartSlice/cartSlice';
import {useDispatch, useSelector} from 'react-redux';

const Logout = () => {
  const {logout} = useContext(AuthContext);
  const state = 0;

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="LOGOUT"
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
};

export default Logout;
