import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// App's Firebase configuration
var config = {
  apiKey: 'AIzaSyDhD6au07FB6oHSel6BqZQnlJcy0KvcZAA',
  authDomain: 'pauls-project-manager.firebaseapp.com',
  databaseURL: 'https://pauls-project-manager.firebaseio.com',
  projectId: 'pauls-project-manager',
  storageBucket: '',
  messagingSenderId: '550186242850',
  appId: '1:550186242850:web:0db2cf95cdfa427c'
}
// Initialize Firebase
firebase.initializeApp(config)
firebase.firestore()

export default firebase
