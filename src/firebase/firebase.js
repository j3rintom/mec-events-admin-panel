import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDPrnm8pEjeeVNoMVHr4HZZ-CBiE5bu780",
  authDomain: "mec-events-4905f.firebaseapp.com",
  projectId: "mec-events-4905f",
  storageBucket: "mec-events-4905f.appspot.com",
  messagingSenderId: "884139538841",
  appId: "1:884139538841:web:93ccc654020c81f56bbb08",
};

// Initialize Firebase
const fireApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth, fireApp };
