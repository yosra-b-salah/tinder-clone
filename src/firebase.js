// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7T-Kn8hHSq6E03LsTeOOzpqySPM5kjKY",
  authDomain: "tinder-clone-45651.firebaseapp.com",
  projectId: "tinder-clone-45651",
  storageBucket: "tinder-clone-45651.appspot.com",
  messagingSenderId: "671129945871",
  appId: "1:671129945871:web:c51deca16632a554dba07a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;