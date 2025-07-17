

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCz9fcnubkwk7_YxfeaJe9LSadFXVTO4t8",
  authDomain: "posty-78d66.firebaseapp.com",
  projectId: "posty-78d66",
  storageBucket: "posty-78d66.appspot.com",
  messagingSenderId: "700866913684",
  appId: "1:700866913684:web:bedd1898affa6bfa859b81",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
