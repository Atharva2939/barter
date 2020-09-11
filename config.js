import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDs-RvqEOl9K1Qtj3Bq1dgFkCJs8kJx8lQ",
    authDomain: "barter-55dff.firebaseapp.com",
    databaseURL: "https://barter-55dff.firebaseio.com",
    projectId: "barter-55dff",
    storageBucket: "barter-55dff.appspot.com",
    messagingSenderId: "317786295436",
    appId: "1:317786295436:web:d26de6541522f47331ffa9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
