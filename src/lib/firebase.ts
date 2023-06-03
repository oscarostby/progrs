import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Initialize Firebase

const firebaseConfig = {
  apiKey: "AIzaSyBKJLydgtBrfcAcCxztJpsWHhoBl3Wl6hw",
  authDomain: "pain-4bc37.firebaseapp.com",
  projectId: "pain-4bc37",
  storageBucket: "pain-4bc37.appspot.com",
  messagingSenderId: "300588455653",
  appId: "1:300588455653:web:2535c75d14924c34c2660c"

};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
