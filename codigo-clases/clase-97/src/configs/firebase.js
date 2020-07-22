import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAf0p2WTOM9WebaYvtr5VEauGAEk2GyAlE',
  authDomain: 'ejemplo-ada.firebaseapp.com',
  databaseURL: 'https://ejemplo-ada.firebaseio.com',
  projectId: 'ejemplo-ada',
  storageBucket: 'ejemplo-ada.appspot.com',
  messagingSenderId: '865542280171',
  appId: '1:865542280171:web:4ff85e144fd3d7d244bfae',
}
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export default app
