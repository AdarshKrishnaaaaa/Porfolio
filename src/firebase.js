import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhOl1bQkKXVPFbPLWX0hTc0c63YuqZThI",
  authDomain: "portfolio-like-app.firebaseapp.com",
  projectId: "portfolio-like-app",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);