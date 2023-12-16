// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXNDkXESeBQS8CY5RNLeaZH88NyTe-NBs",
  authDomain: "code-space-81c09.firebaseapp.com",
  databaseURL: "https://code-space-81c09-default-rtdb.firebaseio.com",
  projectId: "code-space-81c09",
  storageBucket: "code-space-81c09.appspot.com",
  messagingSenderId: "63525844455",
  appId: "1:63525844455:web:035cbfcbad9c4240527942",
  measurementId: "G-CKCBB75JLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
export const dataRef=firebase.database();
export default firebase;