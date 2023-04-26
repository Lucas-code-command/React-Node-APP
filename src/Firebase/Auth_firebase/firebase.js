import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAoOS9By4ZKn8xctZxzW5c6tijXVab3Ems",
  authDomain: "my-site---development.firebaseapp.com",
  projectId: "my-site---development",
  storageBucket: "my-site---development.appspot.com",
  messagingSenderId: "576538305813",
  appId: "1:576538305813:web:4a72bf77dda72761deb51c",
  measurementId: "G-L9FLW0RDDD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);