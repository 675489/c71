import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCnio-LxCiFa8CnEQKc_P8LMguuWAybXvo",
    authDomain: "c71jj-2684f.firebaseapp.com",
    databaseURL: "https://c71jj-2684f-default-rtdb.firebaseio.com",
    projectId: "c71jj-2684f",
    storageBucket: "c71jj-2684f.appspot.com",
    messagingSenderId: "996601771501",
    appId: "1:996601771501:web:fca0bb02cf76d5a08aa3e4",
    measurementId: "G-MDSTJ9QJ6Y"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
