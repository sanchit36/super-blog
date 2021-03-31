import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

import firebaseConfig from "./firebase.config";

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, firestore, storage, firebase as default };
