// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkQ-MBjkEXNFnJlmQq_cq98qcmbtv9k5M",
  authDomain: "email-password-auth-d10e1.firebaseapp.com",
  projectId: "email-password-auth-d10e1",
  storageBucket: "email-password-auth-d10e1.appspot.com",
  messagingSenderId: "409062211643",
  appId: "1:409062211643:web:7074f96929b97b4233dc1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;