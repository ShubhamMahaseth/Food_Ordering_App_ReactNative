import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../../navigation/AuthProvider';

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
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Button
          title="ADD"
          onPress={() => {
            console.log('ADD');
          }}
        />
        <View
          style={{
            color: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            height: 40,
            width: 60,
            borderColor: 'transparent',
          }}>
          <Text style={{color: 'black'}}>{state}</Text>
        </View>
        <Button title="SUB" onPress={() => console.log('SUB')} />
      </View>
    </View>
  );
};

export default Logout;
