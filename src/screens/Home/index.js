import React from 'react';
import {StatusBar, View, ScrollView} from 'react-native';
import Categories from '../../components/Categories';
import HeaderTabs from '../../components/HeaderTabs';
import RestaurantItem from '../../components/RestaurantItem.js';
import SearchBar from '../../components/SearchBar';

const Home = () => {
  return (
    <>
      <StatusBar backgroundColor={'white'} hidden={false} currentHeight />
      <View
        style={{
          paddingTop: 10,
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
        }}>
        <HeaderTabs />
        <SearchBar />
        <Categories />
        <RestaurantItem />
      </View>
    </>
  );
};

export default Home;
