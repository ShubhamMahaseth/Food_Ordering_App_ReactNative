import React from 'react';
import {View, Text} from 'react-native';
import MenuItem from '../../components/RestaurantComponents/MenuItem';
import About from '../../components/RestaurantComponents/About';
import CheckoutButton from '../../components/RestaurantComponents/CheckoutButton';

const RestaurantDetails = navigation => {
  const food = [
    {
      title: 'Lasagna',
      description: 'With butter lettuce, tomato and sauce bechamel',
      price: 19.5,
      image:
        'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
    },
    {
      title: 'Tandoori Chicken',
      description:
        'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
      price: 19.2,
      image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    },
    {
      title: 'Chilaquiles',
      description:
        'Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽',
      price: 14.5,
      image:
        'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg',
    },
    {
      title: 'Chicken Caesar Salad',
      description: 'One can never go wrong with a chicken caesar salad.',
      price: 21.5,
      image:
        'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
    },
    {
      title: 'Panner Tika',
      description: 'With butter lettuce, tomato and sauce bechamel',
      price: 13.5,
      image:
        'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
    },
    {
      title: 'Mushroom',
      description: 'With butter lettuce, tomato and sauce bechamel',
      price: 33.5,
      image:
        'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
    },
    {
      title: 'Crispy Chilli Baby Corn',
      description: 'With butter lettuce, tomato and sauce bechamel',
      price: 53.5,
      image:
        'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
    },
    {
      title: 'Dosa',
      description: 'With butter lettuce, tomato and sauce bechamel',
      price: 213.5,
      image:
        'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
    },
    {
      title: 'Idli',
      description: 'With butter lettuce, tomato and sauce bechamel',
      price: 73.5,
      image:
        'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
    },
    {
      title: 'Soup',
      description: 'With butter lettuce, tomato and sauce bechamel',
      price: 9.5,
      image:
        'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#eee',
      }}>
      <About image={navigation.route.params} />
      <MenuItem food={food} />
      <CheckoutButton />
    </View>
  );
};

export default RestaurantDetails;
