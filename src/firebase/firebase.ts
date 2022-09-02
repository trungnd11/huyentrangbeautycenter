import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJfx36jPa8LnTgkVzyo-jJ7t10yhNEsJ8",
  authDomain: "image-spa.firebaseapp.com",
  projectId: "image-spa",
  StorageBucket: "image-spa.appspot.com",
  messagingSenderId: "1013336426530",
  appId: "1:1013336426530:web:211340c4601740e3f8a27b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const authFacebook = new FacebookAuthProvider();

export const authGoogle = new GoogleAuthProvider();






