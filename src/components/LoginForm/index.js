import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import Validator from 'email-validator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firebase from '../../../firebase';

const LoginForm = ({navigation}) => {
  const [text, setText] = useState('');

  const [icon, setIcon] = useState('eye-off-outline');
  const [hide, setHide] = useState(true);

  const loginValidation = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is requird'),
    password: yup
      .string()
      .min(6, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  const onLogin = async (email, password) => {
    try {
      await firebase.auth().signInwithEmailAndPassword(email, password);
      console.log('Login Successfully', email, password);
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <Formik
        initialValues={{email: '', password: ''}}
        validateOnMount={true}
        validationSchema={loginValidation}
        onSubmit={values => {
          onLogin(values.email, values.password);
        }}>
        {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
          <>
            <View
              style={{
                borderWidth: 1,
                backgroundColor: 'white',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <View style={{width: '30%', height: '35%'}}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={require('../../../assets/images/FoodMonkey.jpg')}
                />
              </View>

              <TextInput
                style={{
                  height: 48,
                  margin: 10,
                  borderWidth: 2,
                  padding: 10,
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? '#DADADA'
                      : 'red',
                  borderRadius: 8,
                  width: '88%',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 16,
                }}
                keyboardType="default"
                placeholder="Phone number, username or email"
                placeholderTextColor={'gray'}
                autoFocus={true}
                // value={text}
                // onChangeText={text => setText(text)}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={{
                    height: 48,
                    marginTop: 10,
                    borderWidth: 2,
                    padding: 10,
                    borderColor:
                      1 > values.password.length || values.password.length >= 6
                        ? '#DADADA'
                        : 'red',
                    borderRadius: 8,
                    width: '88%',
                    color: 'black',
                    fontWeight: '400',
                    fontSize: 16,
                  }}
                  keyboardType="default"
                  placeholder="Password"
                  placeholderTextColor={'gray'}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={hide}
                  textContentType="password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                {1 > values.password.length ? null : (
                  <TouchableOpacity
                    onPress={() => {
                      icon == 'eye-off-outline'
                        ? setIcon('eye-outline')
                        : setIcon('eye-off-outline'),
                        hide == false ? setHide(true) : setHide(false);
                    }}
                    style={{
                      // borderWidth: 1,
                      position: 'absolute',
                      right: 22,
                      top: 23,
                    }}>
                    <Ionicons name={icon} size={20} color="#b2b1b1" />
                  </TouchableOpacity>
                )}
              </View>
              <TouchableOpacity
                style={{marginLeft: 232, marginTop: 5}}
                activeOpacity={0.6}>
                <Text
                  style={{
                    color: '#6BB0F5',
                    fontSize: 15,
                    color: '#0096F6',

                    fontWeight: '500',
                  }}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 8,
                  backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
                  width: '88%',
                  height: 48,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 30,
                }}
                onPress={() => {
                  handleSubmit, navigation.navigate('Home');
                }}
                activeOpacity={0.8}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
                  Log In
                </Text>
              </TouchableOpacity>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={{color: 'black', fontSize: 16, fontWeight: '400'}}>
                  Don't have an account ?{'  '}
                </Text>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => navigation.navigate('SignupScreen')}>
                  <Text
                    style={{
                      color: '#0096F6',
                      fontSize: 16,
                      fontWeight: '600',
                    }}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
