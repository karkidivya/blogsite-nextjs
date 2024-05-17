import {firebase_app} from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';
import {  db } from '../config';
const auth = getAuth(firebase_app);


export default async function signUp(username, email, password) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
        const user = result.user;
        // Save the username in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        username: username,
        email: email
      });
    //   console.log(man,"fdjvn")
    } catch (e) {
        error = e;
    }

    return { result, error };
}