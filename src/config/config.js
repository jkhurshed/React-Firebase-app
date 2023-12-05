import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbVEBV953JkIhtgz7Ipy-A-aq9OmqLZ5Q",
  authDomain: "delivery-ef1cc.firebaseapp.com",
  projectId: "delivery-ef1cc",
  storageBucket: "delivery-ef1cc.appspot.com",
  messagingSenderId: "846240689718",
  appId: "1:846240689718:web:bc3ad3056e05ced4557297",
  measurementId: "G-C57JSVTWVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }