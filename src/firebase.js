import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTgw8d3RcciGFnF7emQyrxtvOOB9XnPHM",
  authDomain: "whatsapp-f56a3.firebaseapp.com",
  projectId: "whatsapp-f56a3",
  storageBucket: "whatsapp-f56a3.appspot.com",
  messagingSenderId: "1024227193535",
  appId: "1:1024227193535:web:4eb855276c08578f3acc0a",
  measurementId: "G-14ZRBC1PEM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, firebase };
export default db;
