// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbw5gBRuRBjpsXZDOCrzKDqE3Fxw37kbs",
  authDomain: "ema-john-authentication-f028a.firebaseapp.com",
  projectId: "ema-john-authentication-f028a",
  storageBucket: "ema-john-authentication-f028a.appspot.com",
  messagingSenderId: "191630351156",
  appId: "1:191630351156:web:92ab0833882a3ac4aa2361"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;