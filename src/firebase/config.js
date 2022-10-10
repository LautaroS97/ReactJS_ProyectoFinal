// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrnIX1Jgp1CtmnIbqq77VpAL2-P4dfcK8",
  authDomain: "civimarket-66ef3.firebaseapp.com",
  projectId: "civimarket-66ef3",
  storageBucket: "civimarket-66ef3.appspot.com",
  messagingSenderId: "766911524186",
  appId: "1:766911524186:web:63f38da4d06c6cf2c4d763"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)