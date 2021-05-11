import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBWK3sNfzBaBoMrKVsLfYVagRpZXOI6nqs",
    authDomain: "todo-app-60d84.firebaseapp.com",
    projectId: "todo-app-60d84",
    storageBucket: "todo-app-60d84.appspot.com",
    messagingSenderId: "1079881171108",
    appId: "1:1079881171108:web:21c22eb2a85f48e0b36631"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firebase();

  export { db };