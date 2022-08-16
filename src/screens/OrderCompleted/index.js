import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import MenuItem from '../../components/RestaurantComponents/MenuItem';
import LottieView from 'lottie-react-native';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

const OrderCompleted = () => {
  const [lastOrder, setLastOrder] = useState({});
  const value = useSelector(state => state.cartSlice.selectedItems.items);

  const restaurant = useSelector(
    state => state.cartSlice.selectedItems.restaurant,
  );

  let totalValue = 0;
  function cartValue(totalValue, value) {
    for (let i = 0; i < value.length; i++) {
      totalValue = totalValue + value[i];
    }
    return totalValue.toFixed(2);
  }

  useEffect(() => {
    const db = firestore();
    const unsubscribe = db
      .collection('orders')
      .orderBy('createdAt', 'desc')
      .limit(1)
      .onSnapshot(snapshot => {
        snapshot.docs.map(doc => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          marginTop: 25,
          alignItems: 'center',
          height: '100%',
        }}>
        <LottieView
          style={{height: 100, alignSelf: 'center', marginBottom: 30}}
          source={require('../../../assets/animations/check-mark.json')}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            marginBottom: 20,
            marginLeft: 8,
            marginRight: 8,
          }}>
          Your order at {restaurant} has been placed for ₹
          {cartValue(totalValue, value)}
        </Text>
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
          <MenuItem food={lastOrder.item} hideCheckbox={true} marginLeft={10} />
          <LottieView
            style={{
              height: 200,
              alignSelf: 'center',
              marginBottom: 30,
            }}
            source={require('../../../assets/animations/cooking.json')}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default OrderCompleted;
