import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "***",
    authDomain: "***",
    projectId: "***",
    storageBucket: "***",
    messagingSenderId: "***",
    appId: "***"
};
  
firebase.initializeApp(config)

const db = firebase.firestore()
const firebaseAuth = firebase.auth()
const usersRef = db.collection('users')
const chatsRef = db.collection('chats')
const messagesRef = db.collection('messages')

export {chatsRef, messagesRef, firebaseAuth, usersRef}