import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';

const About = props => {
  console.log(props.image.categories);
  // const title = 'Farmhouse Kitchen Thai Cusine';
  const reviewData = props.image.review;
  const rating = props.image.rating;
  const price = props.image.price;
  const categories = props.image.categories;

  const mappedCategories = categories
    .map((item, index) => {
      return item.title;
    })
    .join(' • ');

  const description = (reviewData, rating, price, mappedCategories) => {
    return `${mappedCategories} • ${price} • 🎫 • ${rating} ⭐ (${reviewData}+)`;
  };

  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <View
        style={{
          justifyContent: 'flex-start',
          maxHeight: 330,
          elevation: 3,
          marginTop: 0,
          width: '100%',
          backgroundColor: '#f7f7f7',
          overflow: 'hidden',
          borderColor: 'gray',
          elevation: 4,
        }}>
        <Image
          source={{
            uri: props.image.image_URL,
          }}
          style={{
            width: '100%',
            height: '74%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-around',
            paddingLeft: 10,
            paddingTop: 5,
            marginRight: 30,
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 24,
              paddingBottom: 5,
            }}>
            {props.image.name}
          </Text>
          <Text style={{color: 'black', fontWeight: '500', fontSize: 14}}>
            {description(reviewData, rating, price, mappedCategories)}
          </Text>
        </View>
      </View>
    </>
  );
};
export default About;
