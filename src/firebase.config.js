import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2oWpy845Ph51wQa3tpU4w3tay5rvEB3Q",
  authDomain: "restuarantapp-4b3ad.firebaseapp.com",
  databaseURL: "https://restuarantapp-4b3ad-default-rtdb.firebaseio.com",
  projectId: "restuarantapp-4b3ad",
  storageBucket: "restuarantapp-4b3ad.appspot.com",
  messagingSenderId: "201399018591",
  appId: "1:201399018591:web:811b0c2f1b4dd1ac1027ea"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { app, db, storage, firestore };
