import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDK-alP63ThGGCBFDADbK_0BxZW6NEAtco",
    authDomain: "sinautani-8a4a2.firebaseapp.com",
    projectId: "sinautani-8a4a2",
    storageBucket: "sinautani-8a4a2.appspot.com",
    messagingSenderId: "60706021861",
    appId: "1:60706021861:web:400e640448b933e68a0f0c"
};

firebase.initializeApp(firebaseConfig);

export default firebase