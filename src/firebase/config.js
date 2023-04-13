// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT50h4nbi7pGfnm8jHErAqFkbFTWnmpC8",
  authDomain: "pet-web-b257c.firebaseapp.com",
  projectId: "pet-web-b257c",
  storageBucket: "pet-web-b257c.appspot.com",
  messagingSenderId: "155824696358",
  appId: "1:155824696358:web:6a2fbcdb260d49333ccae7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
