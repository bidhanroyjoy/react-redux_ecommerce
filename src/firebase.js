import firebase from "firebase";
// import firebase from 'firebase/app';
// import 'firebase/<PACKAGE>';
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOOoYx2tkz4aEtl_dAMPhtTHuUsv1O4b8",
  authDomain: "ecommerce-df8c0.firebaseapp.com",
  projectId: "ecommerce-df8c0",
  storageBucket: "ecommerce-df8c0.appspot.com",
  messagingSenderId: "634172093692",
  appId: "1:634172093692:web:ff091ce28172d40d875379"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// const app= initializeApp(firebaseConfig);
// const auth=getAuth(app);
// const db=getFirestore(app);
// const storage=getStorage(app);
// const googleAuthProvider = auth.GoogleAuthProvider();

// export { auth,db,storage,googleAuthProvider };

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// export
// export const auth = firebase.auth();
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();