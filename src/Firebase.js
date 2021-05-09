import firebase from "firebase/app";
import "firebase/auth";



const app = firebase.initializeApp({
    /* apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID, */

    apiKey: "AIzaSyB6fXHWYomeowGda87mAeZsuuMdRf5Vook",
    authDomain: "tutor-app-8318e.firebaseapp.com",
    projectId: "tutor-app-8318e",
    storageBucket: "tutor-app-8318e.appspot.com",
    messagingSenderId: "532524773202",
    appId: "532524773202:web:a9108594fd9b920b1fd48b",
    measurementId: "G-ETYL4KNH0B",
});

export const auth = app.auth();
export default app;
