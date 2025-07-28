// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhT5VtmJ3cau9kFzTCyFDDkqhe1h_H_j8",
  authDomain: "skmanagement-844d0.firebaseapp.com",
  projectId: "skmanagement-844d0",
  storageBucket: "skmanagement-844d0.appspot.com", // ✅ Corrected here
  messagingSenderId: "376462589438",
  appId: "1:376462589438:web:d9b6baba915a6d37ab94af",
  measurementId: "G-5PYVCEZRTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
