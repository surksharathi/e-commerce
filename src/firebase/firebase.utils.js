import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBhDX_4Pxpz3qZIII_YtlJU-WLoUY7snyI",
  authDomain: "crown-db-75876.firebaseapp.com",
  databaseURL: "https://crown-db-75876.firebaseio.com",
  projectId: "crown-db-75876",
  storageBucket: "crown-db-75876.appspot.com",
  messagingSenderId: "440294978215",
  appId: "1:440294978215:web:8528ca9965e9832c17a182",
  measurementId: "G-V36W106SXS"
};
firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

// const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
