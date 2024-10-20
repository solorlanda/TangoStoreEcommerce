import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_BDAPIKEY,
  authDomain: "tango-ecommerce-30aa5.firebaseapp.com",
  projectId: "tango-ecommerce-30aa5",
  storageBucket: "tango-ecommerce-30aa5.appspot.com",
  messagingSenderId: "917974381193",
  appId: "1:917974381193:web:a6904d9c330ed37e95cc58",
  measurementId: "G-BTSTSTK2K1"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig); // Inicializa la app de Firebase

// Inicializa Firestore
const db = getFirestore(app); // Obtén la instancia de Firestore usando la app inicializada

// Exporta db para usar en otros componentes
export { db };

// Crear el root y renderizar la aplicación sin StrictMode
const root = createRoot(document.getElementById('root'));
root.render(
  <App db={db} />
);