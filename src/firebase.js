import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBU9F5rCVIWVxEpJKNq-zpJhlctQh34gWo",
    authDomain: "fb-clone-f98dc.firebaseapp.com",
    projectId: "fb-clone-f98dc",
    storageBucket: "fb-clone-f98dc.appspot.com",
    messagingSenderId: "31642137009",
    appId: "1:31642137009:web:4af5ce11f2980ea1a88d90"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;