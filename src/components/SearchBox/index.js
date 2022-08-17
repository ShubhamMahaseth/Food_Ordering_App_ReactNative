import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SearchBar} from 'react-native-elements';

const SearchBox = ({cityHandler}) => {
  const [search, setSearch] = useState('');
  cityHandler(search == '' ? 'New York' : search);
  const updateSearch = searchKey => {
    setSearch(searchKey);
  };

  return (
    <View
      style={{
        marginTop: 10,
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
      }}>
      <SearchBar
        clearIcon={
          search != '' ? (
            <TouchableOpacity activeOpacity={0.8} onPress={() => setSearch('')}>
              <AntDesign
                name="closecircle"
                size={18}
                style={{alignItems: 'flex-end', justifyContent: 'center'}}
                color="gray"
              />
            </TouchableOpacity>
          ) : null
        }
        onChangeText={updateSearch}
        value={search}
        placeholder="Search"
        searchIcon={
          <Ionicons
            name="search"
            size={20}
            style={{alignItems: 'flex-end', justifyContent: 'center'}}
            color="gray"
          />
        }
        containerStyle={{
          backgroundColor: '#eee',
          borderBottomColor: 'transparent',
          borderTopColor: 'transparent',
          height: 45,
          borderRadius: 22,
          width: '94%',
        }}
        inputContainerStyle={{
          backgroundColor: '#eee',
          height: 25,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
        leftIconContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        rightIconContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        inputStyle={{color: 'black', fontWeight: '500'}}
        // showLoading={true}
      ></SearchBar>
    </View>
  );
};

export default SearchBox;
