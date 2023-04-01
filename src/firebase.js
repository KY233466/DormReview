import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  apiKey: "AIzaSyA9d1swYQo_CTnEWJhlEa-FcdCSRfuOttI",
  authDomain: "test-b1688.firebaseapp.com",
  databaseURL: "https://test-b1688.firebaseapp.com",
  projectId: "test-b1688",
  storageBucket: "test-b1688.appspot.com",
  messagingSenderId: "925232800506",
  appId: "1:925232800506:web:ff35028730fc8c72f41f43",
  measurementId: "G-JV3MBYRVPC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

const db = getFirestore(app);

export { db };
