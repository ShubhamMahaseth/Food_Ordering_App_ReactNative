import React, {useState, useRef} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import RBSheet from 'react-native-raw-bottom-sheet';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const CheckoutButton = () => {
  const [loading, setLoading] = useState(false);

  const refRBSheet = useRef();
  const value = useSelector(state => state.cartSlice.selectedItems.items);

  let totalValue = 0;
  function cartValue(totalValue, value) {
    for (let i = 0; i < value.length; i++) {
      totalValue = totalValue + value[i];
    }
    return totalValue.toFixed(2);
  }

  const orderDispatch = useSelector(
    state => state.cartSlice.selectedItems.menuItem,
  );

  const restaurantName = useSelector(
    state => state.cartSlice.selectedItems.restaurantName,
  );

  const restaurant = useSelector(
    state => state.cartSlice.selectedItems.restaurant,
  );

  const createUserInDb = () => {
    setLoading(true);
    const db = firestore();
    db.collection('orders')
      .add({
        item: orderDispatch,
        createdAt: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          navigation.navigate('OrderCompleted');
        }, 2500);
      });
  };
  const navigation = useNavigation();

  return (
    <>
      {value.length > 0 ? (
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={{
              position: 'absolute',
              backgroundColor: 'black',
              // left: 50,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 22,
              bottom: 38,
              width: '76%',
              flexDirection: 'row',
            }}
            onPress={() => refRBSheet.current.open()}>
            <Text
              style={{
                color: 'white',
                fontWeight: '500',
                fontSize: 18,
              }}>
              View Cart
            </Text>
            <Text
              style={{
                color: 'white',
                fontWeight: '500',
                fontSize: 18,
                left: 56,
              }}>
              ₹ {cartValue(totalValue, value)}
            </Text>
          </TouchableOpacity>

          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={true}
            dragFromTopOnly={true}
            closeOnPressBack={true}
            height={400}
            customStyles={{
              container: {borderTopLeftRadius: 16, borderTopRightRadius: 16},
            }}>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 22,
                  fontWeight: '600',

                  padding: 10,
                }}>
                {restaurant}
              </Text>
            </View>
            <ScrollView
              bounces={false}
              style={{
                contentContainer: {
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 6,
                }}>
                <View>
                  {restaurantName.map((item, index) => (
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 18,
                        fontWeight: '500',
                        borderBottomWidth: 2,
                        borderBottomColor: 'gray',
                        padding: 15,
                      }}
                      key={index}>
                      {item}
                    </Text>
                  ))}
                  <Text
                    style={{
                      color: 'green',
                      fontSize: 20,
                      fontWeight: '600',
                      padding: 15,
                    }}>
                    Subtotal
                  </Text>
                </View>
                <View>
                  {value.map((item, index) => (
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 18,
                        fontWeight: '500',
                        borderBottomWidth: 2,
                        borderBottomColor: 'gray',
                        padding: 15,
                      }}
                      key={index}>
                      ₹ {item}
                    </Text>
                  ))}
                  <Text
                    style={{
                      color: 'green',
                      fontSize: 20,
                      fontWeight: '600',
                      padding: 15,
                    }}>
                    ₹ {cartValue(totalValue, value)}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={0.9}
                style={{
                  backgroundColor: 'black',
                  left: '11.5%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 22,
                  width: '76%',
                  height: 49,
                  marginBottom: 10,
                }}
                onPress={() => {
                  refRBSheet.current.close(), createUserInDb();
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '500',
                    fontSize: 18,
                  }}>
                  Checkout
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </RBSheet>
        </View>
      ) : null}
      {loading ? (
        <View
          style={{
            backgroundColor: 'black',
            position: 'absolute',
            opacity: 0.6,
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}>
          <LottieView
            style={{height: 200}}
            source={require('../../../../assets/animations/scanner.json')}
            autoPlay
            speed={3}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default CheckoutButton;
