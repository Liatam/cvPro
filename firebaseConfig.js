import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCvhrUjgttms2I0Rg3nfVctArIKkK-quH8",
  authDomain: "reactcv-35cab.firebaseapp.com",
  projectId: "reactcv-35cab",
  storageBucket: "reactcv-35cab.appspot.com",
  messagingSenderId: "794868825640",
  appId: "1:794868825640:web:30ff16d093ef27fc287f1d",
  measurementId: "G-BECBFSQ6R5"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);