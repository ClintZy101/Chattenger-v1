import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAB3PnhO_Lp6aO_QxLSkUjwrLycKISxLRc",
    authDomain: "next-chat1.firebaseapp.com",
    databaseURL: "https://next-chat1-default-rtdb.firebaseio.com",
    projectId: "next-chat1",
    storageBucket: "next-chat1.appspot.com",
    messagingSenderId: "403599064242",
    appId: "1:403599064242:web:4adda58771524c4fae1dab",
    measurementId: "G-N4ZKVY2RJJ"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db = app.firestore();

  export {db};