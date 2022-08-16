import React from 'react';
import {View} from 'react-native';
import MenuItem from '../../components/RestaurantComponents/MenuItem';
import About from '../../components/RestaurantComponents/About';
import CheckoutButton from '../../components/RestaurantComponents/CheckoutButton';

const RestaurantDetails = navigation => {
  const food = [
    {
      title: 'Soup',
      description: 'With butter lettuce, tomato and sauce bechamel',
      price: 80.5,
      image:
        'https://images.unsplash.com/photo-1578861256505-d3be7cb037d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      title: 'Lasagna',
      description: 'With butter lettuce, tomato and sauce bechamel',
      price: 290,
      image:
        'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
    },
    {
      title: 'Tandoori Chicken',
      description:
        'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
      price: 325,
      image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    },
    {
      title: 'Chilaquiles',
      description:
        'Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽',
      price: 155,
      image:
        'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg',
    },
    {
      title: 'Chicken Caesar Salad',
      description: 'One can never go wrong with a chicken caesar salad.',
      price: 185.5,
      image:
        'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
    },
    {
      title: 'Panner Tika',
      description: 'With butter lettuce, tomato and sauce bechamel',
      price: 390,
      image:
        'https://image.shutterstock.com/image-photo/paneer-tikka-600w-623226842.jpg',
    },
    {
      title: 'Mushroom Masala',
      description: 'With butter lettuce, tomato and sauce bechamel',
      price: 245,
      image:
        'https://image.shutterstock.com/image-photo/indian-mushroom-masala-curry-naan-600w-771724966.jpg',
    },
    {
      title: 'Crispy Chilli Baby Corn',
      description: 'With butter lettuce, tomato and sauce bechamel',
      price: 285,
      image:
        'https://image.shutterstock.com/image-photo/delicious-snack-fried-baby-corn-600w-1759277153.jpg',
    },
    {
      title: 'Dosa',
      description: 'With butter lettuce, tomato and sauce bechamel',
      price: 120,
      image:
        'https://media.istockphoto.com/id/1205482290/photo/masala-dosa-on-banana-leaf-with-both-sambar-and-coconut-chutney-south-indian-vegetarian-snack.webp?s=612x612&w=is&k=20&c=Ddwd3-fDD66wcNozbLtKrp6u2XfeWrGbp6e-uFj83IU=',
    },
    {
      title: 'Idly',
      description: 'With butter lettuce, tomato and sauce bechamel',
      price: 130.65,
      image:
        'https://media.istockphoto.com/id/1024549286/photo/idly-sambar-or-idli-with-sambhar-and-green-red-chutney-popular-south-indian-breakfast.webp?s=612x612&w=is&k=20&c=A5rG0x0Ept4IvaMcJevvEBKwgeF1pFl4S2pO3ioBmP0=',
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
