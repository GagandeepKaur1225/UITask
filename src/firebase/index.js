import firebase from '@react-native-firebase/app';
import { getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDZ9N9khACO4pWFIp2FhQiMFFNFn2V85qY',
  //   authDomain: 'sealing-d6c89.firebaseapp.com',
  projectId: 'ui-task-539e3',
  storageBucket: 'ui-task-539e3.appspot.com',
  //   messagingSenderId: '691746483711',
  appId: '1:707345464442:android:aa51e5bb59920f4ff64fc3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const RNFirebse=await firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
