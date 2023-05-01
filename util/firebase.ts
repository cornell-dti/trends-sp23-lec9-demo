import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Replace with your own Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD13k5sTKweRPpj0l1fKwmCTdj9psUGkpg",
  authDomain: "frodo-199b5.firebaseapp.com",
  projectId: "frodo-199b5",
  storageBucket: "frodo-199b5.appspot.com",
  messagingSenderId: "645268718944",
  appId: "1:645268718944:web:018131bf174f199bbd4a05",
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
