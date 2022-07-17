import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';

const Categories = () => {
  const categoriesData = [
    {
      id: 1,
      categorie: 'Pick-up',
      image: require('../../../assets/images/shopping-bag.png'),
      onPress: () => {
        console.log('Pick-up');
      },
    },
    {
      id: 2,
      categorie: 'Soft Drinks',
      image: require('../../../assets/images/soft-drink.png'),
      onPress: () => {
        console.log('Soft Drinks');
      },
    },
    {
      id: 3,
      categorie: 'Bakery Items',
      image: require('../../../assets/images/bread.png'),
      onPress: () => {
        console.log('Bakery Items');
      },
    },
    {
      id: 4,
      categorie: 'Fast Food',
      image: require('../../../assets/images/fast-food.png'),
      onPress: () => {
        console.log('Fast Food');
      },
    },
    {
      id: 5,
      categorie: 'Deals',
      image: require('../../../assets/images/deals.png'),
      onPress: () => {
        console.log('Deals');
      },
    },
    {
      id: 6,
      categorie: 'Coffee & Tea',
      image: require('../../../assets/images/coffee.png'),
      onPress: () => {
        console.log('Coffee & Tea');
      },
    },
    {
      id: 7,
      categorie: 'Desserts',
      image: require('../../../assets/images/desserts.png'),
      onPress: () => {
        console.log('Desserts');
      },
    },
  ];
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingBottom: 6,
        paddingTop: 6,
        marginTop: 7,
        marginBottom: 7,
        backgroundColor: '#e5cccc',
        opacity: 0.7,
        elevation: 5,
        borderRadius: 9,
      }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categoriesData.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.5}
            key={index}
            style={{
              alignItems: 'center',
              marginRight: 12,
              marginLeft: 12,
            }}
            onPress={item.onPress}>
            <Image
              source={item.image}
              style={{
                width: 42,
                height: 35,
                resizeMode: 'contain',
              }}
            />
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              {item.categorie}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
