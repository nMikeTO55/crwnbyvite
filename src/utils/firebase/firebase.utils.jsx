import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:            "AIzaSyB8b2fJJB1BCjCC3-tG18jmA3-suluebbQ",
  authDomain:        "crwn-58393.firebaseapp.com",
  projectId:         "crwn-58393",
  storageBucket:     "crwn-58393.firebasestorage.app",
  messagingSenderId: "517099518507",
  appId:             "1:517099518507:web:57e104abd8a95fbbae486e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

