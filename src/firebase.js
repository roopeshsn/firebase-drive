import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_DRIVE_API_KEY,
//   authDomain: process.env.FIREBASE_DRIVE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_DRIVE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_DRIVE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_DRIVE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_DRIVE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAq5dRvP0O3L6l62v7gNIXOM3vMjdlg4u8",
  authDomain: "fir-drive-9e385.firebaseapp.com",
  projectId: "fir-drive-9e385",
  storageBucket: "fir-drive-9e385.appspot.com",
  messagingSenderId: "66857968364",
  appId: "1:66857968364:web:ffe0dcd183a3aac6f57bc9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export default app;
