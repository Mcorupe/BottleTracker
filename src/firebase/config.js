import firebase from 'firebase'

console.log(process.env)

const firebaseConfig = {
  REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
  REACT_APP_AUTHDOMAIN: process.env.REACT_APP_AUTHDOMAIN,
  REACT_APP_DATABASEURL: process.env.REACT_APP_DATABASEURL,
  REACT_APP_PROJECTID: process.env.REACT_APP_PROJECTID,
  REACT_APP_STORAGE_BUCKET: process.env.REACT_APP_STORAGE_BUCKET, 
  REACT_APP_MESSAGINGSENDERID: process.env.REACT_APP_MESSAGINGSENDERID,
  REACT_APP_APPID: process.env.REACT_APP_APPID,
  REACT_APP_MEASUREMENTID: process.env.REACT_APP_MEASUREMENTID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
