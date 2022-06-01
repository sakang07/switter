import * as firebase from "firebase/app";

// 웹앱 Firebase 환경 설정
const firebaseConfig = {
  apiKey: "AIzaSyArxa5wQEcu59QRZmOH2eX_pxHDF0hlpVQ",
  authDomain: "switter-248eb.firebaseapp.com",
  projectId: "switter-248eb",
  storageBucket: "switter-248eb.appspot.com",
  messagingSenderId: "153015226532",
  appId: "1:153015226532:web:3b626459d1314edbb91631",
};

export default firebase.initializeApp(firebaseConfig);
