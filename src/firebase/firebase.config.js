// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxUt9kLu1zFsMkaUzo7n4JUhUxkyCh03w",
  authDomain: "mascara-jewelry.firebaseapp.com",
  projectId: "mascara-jewelry",
  storageBucket: "mascara-jewelry.appspot.com",
  messagingSenderId: "77628605683",
  appId: "1:77628605683:web:83ecabb30016502b61e386"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app