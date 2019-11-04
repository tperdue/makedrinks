import * as firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAJTGwl8csVuVeG6p0WqooAGjVwfCh4l-k",
  authDomain: "vision-board-2.firebaseapp.com",
  databaseURL: "https://vision-board-2.firebaseio.com",
  projectId: "vision-board-2",
  storageBucket: "vision-board-2.appspot.com",
  messagingSenderId: "602589051430",
  appId: "1:602589051430:web:7e61ee45956154d41944e7",
  measurementId: "G-P6M7ST9G7P"
};


firebase.initializeApp(firebaseConfig);

export default firebase;



