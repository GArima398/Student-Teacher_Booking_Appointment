// public/firebase/config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDc4SFwxcPZQjHFoBFIHTdYdlWJebuUghs",
  authDomain: "student-teacher-booking-2356d.firebaseapp.com",
  projectId: "student-teacher-booking-2356d",
  storageBucket: "student-teacher-booking-2356d.appspot.com",
  messagingSenderId: "1035416120076",
  appId: "1:1035416120076:web:04cef982c010d06400b729",
  measurementId: "G-VZ42Y25EZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };