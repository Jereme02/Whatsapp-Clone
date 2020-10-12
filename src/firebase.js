import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCklZeLOAiCh41mlADHJqgaDXoiojqDApY",
  authDomain: "whatsapp-clone-89a90.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-89a90.firebaseio.com",
  projectId: "whatsapp-clone-89a90",
  storageBucket: "whatsapp-clone-89a90.appspot.com",
  messagingSenderId: "637459268956",
  appId: "1:637459268956:web:666b66c19f52a69f986d99",
  measurementId: "G-ZJBSNK80DE",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
