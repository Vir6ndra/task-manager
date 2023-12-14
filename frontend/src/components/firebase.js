import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAkcDfubvY_XlhWtzD8HfQrFqBY6ggdSYo",
  authDomain: "ui-management-fc074.firebaseapp.com",
  projectId: "ui-management-fc074",
  storageBucket: "ui-management-fc074.appspot.com",
  messagingSenderId: "1040947484906",
  appId: "1:1040947484906:web:c52de426ae19275e389f93"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const Googleprovider = new  GoogleAuthProvider();
const facebookprovider = new FacebookAuthProvider();
export {auth,Googleprovider,facebookprovider};