import firebase from "firebase/app";

//Initialise Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyAPBRwdWUPomydoB7zDA-lCZ-BNUfDlXM0",
  authDomain: "hackpractise-8219e.firebaseapp.com",
  databaseURL:
    "https://hackpractise-8219e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hackpractise-8219e",
  storageBucket: "hackpractise-8219e.appspot.com",
  messagingSenderId: "34075670600",
  appId: "1:34075670600:web:ba11008e5d7be540d2007d",
  measurementId: "G-JLXY6RP19X",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// export const firbaseAuth = firebaseApp.firbaseAuth();
