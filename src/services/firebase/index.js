import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA8nc1SjzXg9vfHgtF7dE1DMR11MapJ4f4",
    authDomain: "theguitarist-ecommerce.firebaseapp.com",
    projectId: "theguitarist-ecommerce",
    storageBucket: "theguitarist-ecommerce.appspot.com",
    messagingSenderId: "864110277170",
    appId: "1:864110277170:web:4853ed900cbc3aa23a022b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 