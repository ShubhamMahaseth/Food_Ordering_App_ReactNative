import React, {useEffect, useState} from 'react';
import {StatusBar, View, ScrollView, Animated} from 'react-native';
import BottomTabs from '../../components/BottomTabs';
import Categories from '../../components/Categories';
import HeaderTabs from '../../components/HeaderTabs';
import {RestaurantItem, restaurants} from '../../components/RestaurantItem';
import SearchBox from '../../components/SearchBox';
import SkeletonScreen from '../../screens/SkeletonScreen';

const YELP_API_KEY =
  '_IXHxAN41Esb8_kyQU98od_NWVv9JXTUaY4iRQ3lmSN-sqGSKnaktZPqVog9m8q--qDYpb7qn8to9Ha-IMkfyz4yZi_8UO_eA93di7dwGfmGqfDO2shGKne6B5-hYnYx';

export const Home = ({navigation}) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [activeTab, setActiveTab] = useState('Delivery');
  const [city, setCity] = useState('New York');

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then(res => res.json())
      .then(json =>
        setRestaurantData(
          json?.businesses?.filter(business =>
            business?.transactions?.includes(activeTab.toLowerCase()),
          ),
        ),
      )
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 190);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 45],
    outputRange: [0, -45],
  });

  return (
    <>
      <StatusBar
        backgroundColor="white"
        currentHeight
        barStyle="dark-content"
      />

      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Animated.View
          style={{
            transform: [{translateY: translateY}],
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            elevation: 1000,
            zIndex: 1000,

            paddingTop: 12,
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <SearchBox cityHandler={setCity} />

          <Categories />
        </Animated.View>

        {restaurantData == '' ? (
          <ScrollView>
            <SkeletonScreen />
          </ScrollView>
        ) : (
          <ScrollView
            bounces={false}
            contentContainerStyle={{
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onScroll={e => scrollY.setValue(e.nativeEvent.contentOffset.y)}>
            <RestaurantItem
              restaurantData={restaurantData}
              navigation={navigation}
            />
          </ScrollView>
        )}

        <BottomTabs navigation={navigation} />
      </View>
    </>
  );
};

export default Home;
