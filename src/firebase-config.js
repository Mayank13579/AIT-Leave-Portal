import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDAxJjBoY1pGB9VJvrljbv6sZ4Gsar0xIM",
    authDomain: "leavemanagement-718f8.firebaseapp.com",
    projectId: "leavemanagement-718f8",
    storageBucket: "leavemanagement-718f8.appspot.com",
    messagingSenderId: "215370695977",
    appId: "1:215370695977:web:eebd7ebf19d4562245a338",
    measurementId: "G-1J9H0FCF32"
  };
  const app=initializeApp(firebaseConfig);
  const db = getFirestore()
  export const auth=getAuth(app);