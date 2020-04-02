import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDi3GE3djwtA0IwhUDAvVmZjnMit5qb7tY",
    authDomain: "wearables-db.firebaseapp.com",
    databaseURL: "https://wearables-db.firebaseio.com",
    projectId: "wearables-db",
    storageBucket: "wearables-db.appspot.com",
    messagingSenderId: "1070162485002",
    appId: "1:1070162485002:web:fabbe2ffe93f0cdf28a4f3",
    measurementId: "G-QFCCBBHB8T"
};

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email} = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    } 
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth()

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
