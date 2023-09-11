import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCpJHCFKd7YN6g3v80BrETHqIG2fIt4pxY",
    authDomain: "react-firebase-test-7b61f.firebaseapp.com",
    projectId: "react-firebase-test-7b61f",
    storageBucket: "react-firebase-test-7b61f.appspot.com",
    messagingSenderId: "434237132701",
    appId: "1:434237132701:web:cb889f61a41a4959d8a974"
};

// initialise firebase
firebase.initializeApp(firebaseConfig)

// inintialise services
const projectFirestore = firebase.firestore();

export { projectFirestore }