// import firebase from 'firebase/compat/app'
// import"firebase/compat/auth"

import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBxUWC9iZOMHNYssgAPNwya-M92h6cKchU",
  authDomain: "agend-dev.firebaseapp.com",
  projectId: "agend-dev",
  storageBucket: "agend-dev.appspot.com",
  messagingSenderId: "292370568852",
  appId: "1:292370568852:web:e98ee84a0b100010b08681"
}

// export  const auth=app.auth()
// export default app

const app=initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email,password){
  return createUserWithEmailAndPassword(auth,email,password);
}

