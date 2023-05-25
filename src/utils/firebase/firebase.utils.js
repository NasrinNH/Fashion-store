import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwQGVGxsen6KPyR6ybufCceBFigN7HA1E",
  authDomain: "fashion-store-db-61113.firebaseapp.com",
  projectId: "fashion-store-db-61113",
  storageBucket: "fashion-store-db-61113.appspot.com",
  messagingSenderId: "436929331199",
  appId: "1:436929331199:web:a532b41e558dbccc4031ca",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
