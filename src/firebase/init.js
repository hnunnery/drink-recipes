import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBKUqP4cqcrM_ju8Ps6WwqPp89mdT1kPn8",
  authDomain: "ninja-smoothies-ef01e.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-ef01e.firebaseio.com",
  projectId: "ninja-smoothies-ef01e",
  storageBucket: "ninja-smoothies-ef01e.appspot.com",
  messagingSenderId: "901438504944"
};

const firebaseApp = firebase.initializeApp(config);

// export firestore database
export default firebaseApp.firestore()