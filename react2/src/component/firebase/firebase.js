import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyByDK51M-Mkgwhjc9HhHNeVCYgIuM_Qwdg",
  authDomain: "signup-page-96a8e.firebaseapp.com",
  projectId: "signup-page-96a8e",
  storageBucket: "signup-page-96a8e.appspot.com",
  messagingSenderId: "546146968880",
  appId: "1:546146968880:web:3b8685afd7ac09b39754f5",
  measurementId: "G-RRWM0CPC34"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {
    app,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut  
}

