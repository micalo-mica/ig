// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH90ZJFuvfNRkYPPYjexygFhY-dQbY0Cw",
  authDomain: "insta-33d57.firebaseapp.com",
  projectId: "insta-33d57",
  storageBucket: "insta-33d57.appspot.com",
  messagingSenderId: "354320317546",
  appId: "1:354320317546:web:bfafa4192d7672ee151e13"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export {db, storage};