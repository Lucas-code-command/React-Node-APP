// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoOS9By4ZKn8xctZxzW5c6tijXVab3Ems",
  authDomain: "my-site---development.firebaseapp.com",
  projectId: "my-site---development",
  storageBucket: "my-site---development.appspot.com",
  messagingSenderId: "576538305813",
  appId: "1:576538305813:web:4a72bf77dda72761deb51c",
  measurementId: "G-L9FLW0RDDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, analytics };
export default app;