import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

import firebaseConfig from "./firebase.config";

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = () => auth.signInWithPopup(provider);
provider.setCustomParameters({
  prompt: "select_account",
});

export { auth, firestore, storage, signInWithGoogle, firebase as default };
