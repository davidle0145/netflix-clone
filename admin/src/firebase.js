import { initializeApp } from 'firebase/app'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.firebase_apiKey,
    authDomain: process.env.firebase_authDomain,
    projectId: process.env.firebase_projectId,
    storageBucket: process.env.firebase_storageBucket,
    messagingSenderId: process.env.firebase_messagingSenderId,
    appId: process.env.firebase_appId,
    measurementId: process.env.firebase_measurementId
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
