import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrl36L1FmmHyFn_zXjkxL0Dayw1C1GAsk",
  authDomain: "authuser-98d4c.firebaseapp.com",
  projectId: "authuser-98d4c",
  storageBucket: "authuser-98d4c.appspot.com",
  messagingSenderId: "243732641969",
  appId: "1:243732641969:web:dfafec159278394a1d0a90"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app)
export default db;
