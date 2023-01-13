// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9d1swYQo_CTnEWJhlEa-FcdCSRfuOttI",
  authDomain: "test-b1688.firebaseapp.com",
  projectId: "test-b1688",
  storageBucket: "test-b1688.appspot.com",
  messagingSenderId: "925232800506",
  appId: "1:925232800506:web:5ccb28ef14b38227f41f43",
  measurementId: "G-VZDXHCQFVC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
