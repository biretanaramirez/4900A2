import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCt6PH1bjcOqaWjf2U1bDuRneDFhX4nigc',
  authDomain: 'my-subscriptions-10f30.firebaseapp.com',
  projectId: 'my-subscriptions-10f30',
  storageBucket: 'my-subscriptions-10f30.appspot.com',
  messagingSenderId: '417917807868',
  appId: '1:417917807868:web:ea3acd8170fd6d5d4afb79'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
