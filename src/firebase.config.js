import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"




// const firebaseConfig = {
//     apiKey: "AIzaSyDBdWO9zKaQ2UjLW6XVmy69I9pP1rPJS-Y",
//     authDomain: "disney-plus-clone-23ce8.firebaseapp.com",
//     projectId: "disney-plus-clone-23ce8",
//     storageBucket: "disney-plus-clone-23ce8.appspot.com",
//     messagingSenderId: "715618917639",
//     appId: "1:715618917639:web:032fb49095310b53cbf9a2",
//     measurementId: "G-55TMYQ3TKT",
//   };

const firebaseConfig = {
  apiKey: "AIzaSyB0ZYEF-vbidXqI9SHz8JVpGaYX4gInwd4",
  authDomain: "disneypluse.firebaseapp.com",
  projectId: "disneypluse",
  storageBucket: "disneypluse.appspot.com",
  messagingSenderId: "395812459060",
  appId: "1:395812459060:web:98aeb17fadd0f3ce7f7061"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db }