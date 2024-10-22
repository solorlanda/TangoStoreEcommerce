import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_BDAPIKEY,
  authDomain: "tango-ecommerce-30aa5.firebaseapp.com",
  projectId: "tango-ecommerce-30aa5",
  storageBucket: "tango-ecommerce-30aa5.appspot.com",
  messagingSenderId: "917974381193",
  appId: "1:917974381193:web:a6904d9c330ed37e95cc58",
  measurementId: "G-BTSTSTK2K1"
};


const app = initializeApp(firebaseConfig); 


const db = getFirestore(app); 


export { db };


const root = createRoot(document.getElementById('root'));
root.render(
  <App db={db} />
);