const firebaseConfig = {
  apiKey: "AIzaSyC7Pcx_RAMoLdjvWO0joNnbh_7hFxBo6fw",
  authDomain: "fir-practice-7eac7.firebaseapp.com",
  projectId: "fir-practice-7eac7",
  storageBucket: "fir-practice-7eac7.appspot.com",
  messagingSenderId: "58060655299",
  appId: "1:58060655299:web:d5b595df6ad7b789797076"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()