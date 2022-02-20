import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyArbGleWfCfJHkx9jeHa8Iw2Poo6PxhjXE",
    authDomain: "linkedin-clone-devesh.firebaseapp.com",
    projectId: "linkedin-clone-devesh",
    storageBucket: "linkedin-clone-devesh.appspot.com",
    messagingSenderId: "636310907926",
    appId: "1:636310907926:web:e52f06dfa2d000c4dd9937"
};

const firebaseApplication = firebase.initializeApp(firebaseConfig); /* Connecting to Firebase and Setting up */
const database = firebaseApplication.firestore(); /* Access to Firestore Database */
const auth = firebase.auth(); /* Access to Firebase Authentication Tools */

export { database, auth }; /* Need the access to these variables outside this file */
