import { initializeApp } from 'firebase/app'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA9jdEIWDTnK56gERC0XExnIYfpNransvc",
    authDomain: "netflix-clone-6f9a6.firebaseapp.com",
    projectId: "netflix-clone-6f9a6",
    storageBucket: "netflix-clone-6f9a6.appspot.com",
    messagingSenderId: "458153520201",
    appId: "1:458153520201:web:06f896b4a2553e7f1ce398",
    measurementId: "G-SDBVRVGHES"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
