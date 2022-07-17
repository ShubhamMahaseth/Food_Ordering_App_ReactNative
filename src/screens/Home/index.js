import React, {useEffect, useState} from 'react';
import {StatusBar, View, ScrollView, Button} from 'react-native';
import BottomTabs from '../../components/BottomTabs';
import Categories from '../../components/Categories';
import HeaderTabs from '../../components/HeaderTabs';
import {RestaurantItem, restaurants} from '../../components/RestaurantItem.js';
import SearchBar from '../../components/SearchBar';

const Home = () => {
  const [restaurantData, setRestaurantData] = useState(restaurants);
  const YELP_API_KEY =
    'bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx';

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=NewYork`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions).then(res => setRestaurantData(res));
    // .then(json => setRestaurantData(json.data));
  };

  return (
    <>
      <StatusBar backgroundColor={'white'} hidden={false} currentHeight />
      {/* <Button title="press" onPress={getRestaurantsFromYelp}></Button> */}
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
        <RestaurantItem restaurantData={restaurantData} />
        <BottomTabs />
      </View>
    </>
  );
};

export default Home;
