import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Initialize Firebase

const firebaseConfig = {
  apiKey: "AIzaSyDYVPoMKP1BT-Z-luMRtml08imR2O-pgfY",
  authDomain: "prog-c9c75.firebaseapp.com",
  projectId: "prog-c9c75",
  storageBucket: "prog-c9c75.appspot.com",
  messagingSenderId: "409266376225",
  appId: "1:409266376225:web:1e7edd96b8d0d1103e1d60",
  measurementId: "G-W4QYTCZLPB"

};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
