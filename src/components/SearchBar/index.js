import React from 'react';
import {View, Text} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = () => {
  return (
    <View
      style={{
        marginTop: 10,
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
      }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        // minLength={2}
        autoFocus={false}
        returnKeyType={'default'}
        fetchDetails={true}
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            color: 'black',
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
          },
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 10}}>
            <Ionicons name="location-sharp" size={24} color="black" />
          </View>
        )}
        renderRightButton={() => (
          <>
            <AntDesign
              name="closecircle"
              size={16}
              style={{marginRight: 6}}
              color="gray"
            />
            <View
              style={{
                flexDirection: 'row',
                marginRight: 8,
                backgroundColor: 'white',
                padding: 9,
                borderRadius: 30,
                alignItems: 'center',
              }}>
              <AntDesign
                name="clockcircle"
                size={16}
                style={{marginRight: 6}}
                color="black"
              />
              <Text style={{color: 'black'}}>Search</Text>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default SearchBar;
