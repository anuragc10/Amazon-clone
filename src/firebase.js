import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDib8iqeaiMl9cQIXGrnAnUlhZyrV04MNo",
    authDomain: "clone-bf453.firebaseapp.com",
    projectId: "clone-bf453",
    storageBucket: "clone-bf453.appspot.com",
    messagingSenderId: "377691530469",
    appId: "1:377691530469:web:47af3891907f065254600c",
    measurementId: "G-XP8RDV9R8F"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth(); 

  export {db,auth};