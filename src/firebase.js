import firebase from 'firebase/compat/app'
import"firebase/compat/auth"

const app = firebase.initializeApp({
  apiKey: process.env.RAF_RAF_apiKey,
  authDomain: process.env.RAF_authDomain,
  projectId: process.env.RAF_projectId,
  storageBucket: process.env.RAF_storageBucket,
  messagingSenderId: process.env.RAF_messagingSenderId,
  appId: process.env.RAF_appId
})

export  const auth=app.auth()
export default app
