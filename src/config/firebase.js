import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCULK-WQ26GHiXNcb3amd04nhhfvDH0F_U",
  authDomain: "chatio-61e7b.firebaseapp.com",
  projectId: "chatio-61e7b",
  storageBucket: "chatio-61e7b.appspot.com",
  messagingSenderId: "598540375689",
  appId: "1:598540375689:web:f4ad51fc88b9575d0ed858",
  measurementId: "G-LVF58B28BK",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
