import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBDOUeUlEEc-S1jLDsNNtcbzbDs55iCatw",
  authDomain: "hospital-app-8d0e2.firebaseapp.com",
  projectId: "hospital-app-8d0e2",
  storageBucket: "hospital-app-8d0e2.firebasestorage.app",
  messagingSenderId: "351012715031",
  appId: "1:351012715031:web:979e9eae6ac896943aba52",
  measurementId: "G-K7QT6LRB35",
  databaseURL:"https://hospital-app-8d0e2-default-rtdb.firebaseio.com/"
};
 const app =initializeApp(firebaseConfig);
 const db = getFirestore(app);
 const auth = getAuth(app);
export {db, auth};