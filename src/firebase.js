import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "",
  authDomain: "clone-bf227.firebaseapp.com",
  databaseURL: "https://clone-bf227.firebaseio.com",
  projectId: "clone-bf227",
  storageBucket: "clone-bf227.appspot.com",
  messagingSenderId: "222390038241",
  appId: "1:222390038241:web:2b5756ebeb71344e8491a0",
  measurementId: "G-X161KLJW2K",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
