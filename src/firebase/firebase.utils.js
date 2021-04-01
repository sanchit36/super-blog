import { firestore } from "./firebase.setup";

export const setUserProfileData = async (user) => {
  const userRef = firestore.collection("users").doc(user.uid);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    userRef.set({
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    });
  }
};
