import firebase from 'firebase';
import 'firebase/database';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA82GydxTENW2rQnUMOHQ7gpXXwCWlr_Sg",
    authDomain: "turninglife-c3bcb.firebaseapp.com",
    databaseURL: "https://turninglife-c3bcb.firebaseio.com",
    projectId: "turninglife-c3bcb",
    storageBucket: "turninglife-c3bcb.appspot.com",
    messagingSenderId: "805149093019",
    appId: "1:805149093019:web:ff88720554c91299d52a3e"
  });

const fireStore =firebaseApp.firestore();


export default fireStore;
