import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyAn6xFD8u7k9sbtuSVvgK-GX5u0HhgTPwM",
    authDomain: "lastp-f09e0.firebaseapp.com",
    databaseURL: "https://lastp-f09e0.firebaseio.com",
    projectId: "lastp-f09e0",
    storageBucket: "lastp-f09e0.appspot.com",
    messagingSenderId: "644460275645",
    appId: "1:644460275645:web:995b983a0ecfbac00794d4",
    measurementId: "G-8PW83NGB0X"
  };
  firebase.initializeApp(firebaseConfig) 
  firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
  });
}
export const db = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()