import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBhDX_4Pxpz3qZIII_YtlJU-WLoUY7snyI",
  authDomain: "crown-db-75876.firebaseapp.com",
  databaseURL: "https://cors-anywhere.herokuapp.com/https://crown-db-75876.firebaseio.com",
  projectId: "crown-db-75876",
  storageBucket: "crown-db-75876.appspot.com",
  messagingSenderId: "440294978215",
  appId: "1:440294978215:web:8528ca9965e9832c17a182",
  measurementId: "G-V36W106SXS"
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
