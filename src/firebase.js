// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDPlF8__-j3HNjoB2qDQJkYCI18kMXh2XA",
  authDomain: "fir-aed96.firebaseapp.com",
  projectId: "fir-aed96",
  storageBucket: "fir-aed96.appspot.com",
  messagingSenderId: "639205678609",
  appId: "1:639205678609:web:3cdde727db21a1a04d1bb0",
  measurementId: "G-50HBV6LPX5"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

export {db, auth};