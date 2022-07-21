import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {CheckBox} from 'react-native-elements';

const MenuItem = () => {
  const [box, setBox] = useState(false);

  const food = [
    {
      title: 'Lasagna',
      description: 'With butter lettuce, tomato and sauce bechamel',
      price: '$13.50',
      image:
        'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
      box: false,
    },
    {
      title: 'Tandoori Chicken',
      description:
        'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
      price: '$19.20',
      image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
      box: false,
    },
    {
      title: 'Chilaquiles',
      description:
        'Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽',
      price: '$14.50',
      image:
        'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg',
      box: false,
    },
    {
      title: 'Chicken Caesar Salad',
      description: 'One can never go wrong with a chicken caesar salad.',
      price: '$21.50',
      image:
        'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
      box: false,
    },
    {
      title: 'Lasagna',
      description: 'With butter lettuce, tomato and sauce bechamel',
      price: '$13.50',
      image:
        'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
      box: false,
    },
    {
      title: 'Lasagna',
      description: 'With butter lettuce, tomato and sauce bechamel',
      price: '$13.50',
      image:
        'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
      box: false,
    },
    {
      title: 'Lasagna',
      description: 'With butter lettuce, tomato and sauce bechamel',
      price: '$13.50',
      image:
        'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
      box: false,
    },
    {
      title: 'Lasagna',
      description: 'With butter lettuce, tomato and sauce bechamel',
      price: '$13.50',
      image:
        'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
      box: false,
    },
    {
      title: 'Lasagna',
      description: 'With butter lettuce, tomato and sauce bechamel',
      price: '$13.50',
      image:
        'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
      box: false,
    },
    {
      title: 'Lasagna',
      description: 'With butter lettuce, tomato and sauce bechamel',
      price: '$13.50',
      image:
        'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
      box: false,
    },
  ];
  return (
    <ScrollView bounces={false}>
      {food.map((item, index) => (
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            borderBottomWidth: 0.2,
            borderTopWidth: 0.3,
            borderColor: 'gray',
            // borderRadius: 10,
            backgroundColor: 'white',
            maxHeight: 130,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-around',
            overflow: 'hidden',
            elevation: 3,
            flexDirection: 'row-reverse',
          }}
          key={index}>
          <View
            style={{
              width: '22%',
              height: '80%',

              marginRight: 10,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
              }}
              source={{uri: item.image}}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'transparent',

              marginRight: 10,
              width: '60%',
            }}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              {item.title}
            </Text>

            <Text style={{color: 'black', fontWeight: '400', fontSize: 15}}>
              {item.description}
            </Text>
            <Text
              style={{
                color: 'black',
                fontWeight: '500',
                fontSize: 15,
                marginTop: 5,
              }}>
              {item.price}
            </Text>
          </View>
          <CheckBox
            checked={item.box}
            checkedColor={'green'}
            onPress={() => setBox(box ? false : true)}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
export default MenuItem;
