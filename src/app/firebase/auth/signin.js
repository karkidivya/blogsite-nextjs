import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getDoc } from 'firebase/firestore';
import {  db } from '../config';
const auth = getAuth(firebase_app);

export default async function signIn(email, password) {
    let result = null,
        error = null,
        userName = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
        const user = result.user;

        // Fetch user data from Firestore
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          userName = userData.username
          console.log('User signed in:', userData);
        } else {
          console.log('No such document!');
        }
    } catch (e) {
        error = e;
    }

    return { result,userName, error };
}