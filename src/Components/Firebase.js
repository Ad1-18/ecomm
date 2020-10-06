import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA-Ta6JrIC359r5B25878SzbyjDfoesNa8",
    authDomain: "ecommjas.firebaseapp.com",
    databaseURL: "https://ecommjas.firebaseio.com",
    projectId: "ecommjas",
    storageBucket: "ecommjas.appspot.com",
    messagingSenderId: "680945991473",
    appId: "1:680945991473:web:c3779e4b1df4bd49a7fa10",
    measurementId: "G-M4N7BK9WPD"
})

//const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };