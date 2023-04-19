import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./secretkey";

//create a secret.js file in src folder and provide firebaseconfig object ,MAKE SURE TO INCLUDE FIREBASE STORAGE

const app = initializeApp(firebaseConfig);

export default app;
