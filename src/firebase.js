import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
import "firebase/firestore";
import "firebase/messaging";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAXVB3kSjSSGMuFTLOM36V4euozmTUCS7g",
  authDomain: "clone-93148.firebaseapp.com",
  databaseURL: "https://clone-93148.firebaseio.com",
  projectId: "clone-93148",
  storageBucket: "clone-93148.appspot.com",
  messagingSenderId: "697172881979",
  appId: "1:697172881979:web:b74f64a9a4b6bd5d64621e",
  measurementId: "G-CTG83WN4GB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
