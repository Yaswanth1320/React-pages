import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDu9SI8as3gQ0XSbQEZ28FOQU0LwxxplXo",
  authDomain: "messanger-87b93.firebaseapp.com",
  projectId: "messanger-87b93",
  storageBucket: "messanger-87b93.appspot.com",
  messagingSenderId: "113805393555",
  appId: "1:113805393555:web:878326bc7f2ee752f29766",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app
