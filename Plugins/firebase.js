// Initialize Cloud Firestore through Firebase
import { initializeApp, getApps} from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

if(getApps.length === 0){ 
    const firebaseApp = initializeApp({
        apiKey: "AIzaSyBvjOpa-uBTfA_pBzo3MbO72dQabPRNUO0",
        authDomain: "proyecto-gloasario.firebaseapp.com",
        databaseURL: "https://proyecto-gloasario-default-rtdb.firebaseio.com",
        projectId: "proyecto-gloasario",
        storageBucket: "proyecto-gloasario.appspot.com",
        messagingSenderId: "909726365107",
        appId: "1:909726365107:web:10056c5752f289ecc047c6",
        measurementId: "G-H8LV0V60PQ"
    });
}

const db = getFirestore();
const auth = getAuth();

export { db, auth }

