import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBB2PI-PYn-saZdF6y0LoU_PLGHS7YLOuk',
  authDomain: 'crwn-db-5bd76.firebaseapp.com',
  projectId: 'crwn-db-5bd76',
  storageBucket: 'crwn-db-5bd76.appspot.com',
  messagingSenderId: '772702821989',
  appId: '1:772702821989:web:ebae48fa4f48db2a4c308c',
  measurementId: 'G-Q793EYCCN9',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return {};

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
        ...additionalData,
      });
    } catch (error) {
      console.log('error created user', error.message);
    }
  }

  return userRef;
};
