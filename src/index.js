import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";
//import * as firebase from "./firebase";
/*import { initializeApp } from "firebase/app";
import styled from "styled-components";

const firebaseConfig = {
  apiKey: "AIzaSyAGc92FyzoD9AGIfb8GTbbRo_uaGV2Seg8",
  authDomain: "disney-8a4e7.firebaseapp.com",
  projectId: "disney-8a4e7",
  storageBucket: "disney-8a4e7.appspot.com",
  messagingSenderId: "321810247424",
  appId: "1:321810247424:web:4f60a2ba7ff8c43c34cde5",
  measurementId: "G-YJVYYBVREY",
};

//firebase.initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
