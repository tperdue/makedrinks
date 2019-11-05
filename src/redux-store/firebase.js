import * as firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyConNVZ0uI9DuvPF5HujcYD7HZwOHAK8fw",
  authDomain: "makedrinksapp.firebaseapp.com",
  databaseURL: "https://makedrinksapp.firebaseio.com",
  projectId: "makedrinksapp",
  storageBucket: "makedrinksapp.appspot.com",
  messagingSenderId: "901444337098",
  appId: "1:901444337098:web:c6bdc792c1f6d00f10e333",
  measurementId: "G-KQ60B4DF3T"
};


firebase.initializeApp(firebaseConfig);

export default firebase;



