import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {}
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore()

export default db
