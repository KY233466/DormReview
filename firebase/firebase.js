"use client";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9d1swYQo_CTnEWJhlEa - FcdCSRfuOttI",
  authDomain: "test-b1688.firebaseapp.com",
  databaseURL: "http://test-b1688.firebaseapp.com",
  projectId: "test-b1688",
  storageBucket: "test-b1688.appspot.com",
  messagingSenderId: "925232800506",
  appId: "1:925232800506:web:5ccb28ef14b38227f41f43",
  measurementId: "G-VZDXHCQFVC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

const db = getFirestore(app);

export { db };

// import { initializeApp, getApps } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9d1swYQo_CTnEWJhlEa - FcdCSRfuOttI",
//   authDomain: "test-b1688.firebaseapp.com",
//   projectId: "test-b1688",
//   storageBucket: "test-b1688.appspot.com",
//   messagingSenderId: 925232800506,
//   appId: "1:925232800506:web:5ccb28ef14b38227f41f43",
//   measurementId: "G-VZDXHCQFVC",
// };

// // const app = initializeApp(firebaseConfig);
// export const auth = getAuth(firebase_app);
// // export default app;

// const db = getFirestore(firebase_app);

// export { db };

// // Initialize Firebase
// let firebase_app =
//   getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// export default firebase_app;
