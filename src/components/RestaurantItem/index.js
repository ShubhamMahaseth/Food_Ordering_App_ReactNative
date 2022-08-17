import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useDispatch} from 'react-redux';
import {addRestaurantName} from '../../redux/cartSlice/cartSlice';

export const restaurants = [
  {
    name: 'Beachside Bar',
    image_url:
      'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
    categories: ['Cafe', 'Bar'],
    price: '₹₹',
    reviews: 14,
    rating: 4.5,
  },
  {
    name: 'Benihana',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Cafe', 'Bar'],
    price: '₹₹',
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Indian', 'Bar'],
    price: '₹₹',
    reviews: 700,
    rating: 2.3,
  },
];

export const RestaurantItem = props => {
  const dispatch = useDispatch();

  return (
    <View style={{marginTop: 186}}>
      {props.restaurantData?.map((item, index) => (
        <TouchableOpacity
          activeOpacity={0.8}
          key={index}
          style={{
            height: 250,
            elevation: 3,
            marginTop: 0,
            marginBottom: 7,
            minWidth: '96%',
            borderRadius: 10,
            backgroundColor: 'white',
          }}
          onPress={() => {
            props.navigation.navigate(
              'RestaurantDetails',
              {
                image_URL: item.image_url,
                name: item.name,
                review: item.review_count,
                rating: item.rating,
                price: item.price,
                categories: item.categories,
              },
              dispatch(addRestaurantName(item.name)),
            );
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
              marginTop: 4,
              paddingLeft: 10,
              paddingRight: 20,
            }}>
            <View>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14}}>
                {item.name}
              </Text>
              <Text style={{color: 'black', fontWeight: '500', fontSize: 10}}>
                30-45 min
              </Text>
            </View>
            <View
              style={{
                borderRadius: 8,
                width: 40,
                height: 22,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'green',
              }}>
              <Text style={{color: 'white', fontWeight: '500', fontSize: 14}}>
                {item.rating}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              position: 'absolute',
              right: 20,
              top: 20,
            }}>
            <EvilIcons name="heart" size={28} color="white" />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
