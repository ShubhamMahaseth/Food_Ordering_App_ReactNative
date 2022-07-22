// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBeiNV94236mWfmOWhsvH0V6WNvaO3HRbI',
  authDomain: 'food-ordering-app-rn.firebaseapp.com',
  projectId: 'food-ordering-app-rn',
  storageBucket: 'food-ordering-app-rn.appspot.com',
  messagingSenderId: '257769424612',
  appId: '1:257769424612:web:66c202c51cbb2eb7b48ef1',
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
