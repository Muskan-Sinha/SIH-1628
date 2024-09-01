import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseconfig = {
  apiKey: "AIzaSyAfmbZMRPTOK8LN7IY9mmAD3XYO_78UHkk",
  authDomain: "sihs-40988.firebaseapp.com",
  projectId: "sihs-40988",
  storageBucket: "sihs-40988.appspot.com",
  messagingSenderId: "908242140874",
  appId: "1:908242140874:web:c9fa3e9f3a9d2f6258be33",
  measurementId: "G-V3EFHDLEH0"
};

// Initialize Firebase
const app = initializeApp(firebaseconfig);
export const auth = getAuth(app);
export default app;