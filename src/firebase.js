import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD54oFmaBBmIxokH0Dcmr0ydDg25LfuMZU",
  authDomain: "whatsapp-4747b.firebaseapp.com",
  projectId: "whatsapp-4747b",
  storageBucket: "whatsapp-4747b.appspot.com",
  messagingSenderId: "235112072003",
  appId: "1:235112072003:web:8e22d6f1d73033f1ace5f6",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, firebase };
export default db;
