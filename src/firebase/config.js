import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCR4ZCWqA-0UUL0ttOev9RpfiTljn5uuTk",
  authDomain: "miniblog-c694c.firebaseapp.com",
  projectId: "miniblog-c694c",
  storageBucket: "miniblog-c694c.appspot.com",
  messagingSenderId: "779223662703",
  appId: "1:779223662703:web:ced0fe6ac4dc868bc04d9a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }