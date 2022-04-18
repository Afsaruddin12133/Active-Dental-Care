// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIwbxpRvnn-15NBDOY9o4Cz98SDVPhm3M",
  authDomain: "active-dental-care-e433d.firebaseapp.com",
  projectId: "active-dental-care-e433d",
  storageBucket: "active-dental-care-e433d.appspot.com",
  messagingSenderId: "124700440282",
  appId: "1:124700440282:web:b65dee7f8030846c59d7e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;