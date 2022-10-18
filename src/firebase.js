import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9d1swYQo_CTnEWJhlEa-FcdCSRfuOttI",
  authDomain: "test-b1688.firebaseapp.com",
  projectId: "test-b1688",
  storageBucket: "test-b1688.appspot.com",
  messagingSenderId: "925232800506",
  appId: "1:925232800506:web:5ccb28ef14b38227f41f43",
  measurementId: "G-VZDXHCQFVC",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
