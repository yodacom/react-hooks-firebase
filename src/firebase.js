import firebase from 'firebase/app';
import 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyDRrvZlWGbJWr91ayUC1pmddTUr713XU80",
    authDomain: "react-hooks-firebase-873e5.firebaseapp.com",
    databaseURL: "https://react-hooks-firebase-873e5.firebaseio.com",
    projectId: "react-hooks-firebase-873e5",
    storageBucket: "react-hooks-firebase-873e5.appspot.com",
    messagingSenderId: "388253350632",
    appId: "1:388253350632:web:5518d4f28a5da7212c275d",
    measurementId: "G-BQMVTMYCX0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  export default firebase;