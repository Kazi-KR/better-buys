import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB_xWYYn4bg4qlTXo9ZXdw4JhJ8f314G9c",
    authDomain: "better-buys-20d7c.firebaseapp.com",
    projectId: "better-buys-20d7c",
    storageBucket: "better-buys-20d7c.appspot.com",
    messagingSenderId: "1013143175020",
    appId: "1:1013143175020:web:1be8f9c68c74f00a20bd49"
};

export const createUserDocument=async(userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot=userRef.get();
    if(! snapShot.exists){
        const {displayName,email}=userAuth;
        const createdAt=new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user',error.message);
        }
    }
    return userRef;  
};


firebase.initializeApp(firebaseConfig);

export const auth=firebase.auth();
export const firestore=firebase.firestore();


const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInwithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;
