import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCEexqeaYtrvF6MkKB7IMN8idjmXUtdRcY",
  authDomain: "e-com-3fbf8.firebaseapp.com",
  projectId: "e-com-3fbf8",
  storageBucket: "e-com-3fbf8.appspot.com",
  messagingSenderId: "50240077736",
  appId: "1:50240077736:web:d6911a69644849aa2c279d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



