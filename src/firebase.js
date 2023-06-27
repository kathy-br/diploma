import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAGc92FyzoD9AGIfb8GTbbRo_uaGV2Seg8",
  authDomain: "disney-8a4e7.firebaseapp.com",
  projectId: "disney-8a4e7",
  storageBucket: "disney-8a4e7.appspot.com",
  messagingSenderId: "321810247424",
  appId: "1:321810247424:web:4f60a2ba7ff8c43c34cde5",
  measurementId: "G-YJVYYBVREY",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
