import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCDNSmRurEAqqHA_vVdmTt25XpsqRnf7Ro",
    authDomain: "clone-a055c.firebaseapp.com",
    projectId: "clone-a055c",
    storageBucket: "clone-a055c.appspot.com",
    messagingSenderId: "1012386050292",
    appId: "1:1012386050292:web:cb75f40f30eb72975aaea1",
    measurementId: "G-0E4C1E39PV"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }

//******deploy steps********////

//firbase login
//firebase init  >> Hosting
//chosse the name of project
// What do you want to use as your public directory? >> build
//Configure as a single-page app (rewrite all urls to /index.html) >> y
//npm run build 
// firebase deploy