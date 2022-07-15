import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';

const RestaurantItem = () => {
  const restaurantsData = [
    {
      name: 'Beachside Bar',
      image_url:
        'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
      categories: ['Cafe', 'Bar'],
      price: '$$',
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: 'Benihana',
      image_url:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      categories: ['Cafe', 'Bar'],
      price: '$$',
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      categories: ['Indian', 'Bar'],
      price: '$$',
      reviews: 700,
      rating: 4.9,
    },
  ];
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 8}}>
      {restaurantsData.map((item, index) => (
        <TouchableOpacity
          activeOpacity={0.8}
          key={index}
          style={{
            height: 250,
            elevation: 3,

            borderWidth: 0,
            marginTop: 10,
            marginBottom: 5,
            minWidth: '96%',
            // justifyContent: 'flex-start',
            borderRadius: 10,
            backgroundColor: 'white',
          }}>
          <Image
            style={{
              width: '100%',
              height: '83%',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            source={{uri: item.image_url}}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingLeft: 10,
              paddingRight: 20,
            }}>
            <View>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14}}>
                {item.name}
              </Text>
              <Text style={{color: 'black', fontWeight: '500', fontSize: 10}}>
                30-45 . min
              </Text>
            </View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14}}>
              {item.rating}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default RestaurantItem;
