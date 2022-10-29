import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  // config key
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);