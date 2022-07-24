import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../../navigation/AuthProvider';

const Logout = () => {
  const {logout} = useContext(AuthContext);
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
