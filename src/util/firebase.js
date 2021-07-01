import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbTCdPt9rgwb8KZwVEFr_qXVGtfnEltBE",
  authDomain: "todoapp-fd7c4.firebaseapp.com",
  databaseURL: "https://todoapp-fd7c4-default-rtdb.firebaseio.com",
  projectId: "todoapp-fd7c4",
  storageBucket: "todoapp-fd7c4.appspot.com",
  messagingSenderId: "370255266093",
  appId: "1:370255266093:web:6077a7e8f495c3e548d3a4",
  measurementId: "G-J2RJ610VTV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
