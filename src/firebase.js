import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Anonymous Authentication
export const auth = getAuth(app); 
 
// auto login silently
signInAnonymously(auth).catch(console.error);
