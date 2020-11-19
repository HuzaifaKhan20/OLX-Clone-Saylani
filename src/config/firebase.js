// import * as firebase from 'firebase/app';
import firebase from 'firebase';
import "firebase/firestore";
import 'firebase/database';
import'firebase/storage';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCMb2xxduUS5GTT6pr-LMugSp6JJxmH6kM",
  authDomain: "olx-assignment-1.firebaseapp.com",
  databaseURL: "https://olx-assignment-1.firebaseio.com",
  projectId: "olx-assignment-1",
  storageBucket: "olx-assignment-1.appspot.com",
  messagingSenderId: "536822361235",
  appId: "1:536822361235:web:20d244745f5d327868f166",
  measurementId: "G-X18CGPMRHE"
};


firebase.initializeApp(config);
export default firebase;