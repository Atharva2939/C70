import firebase as 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBktt83Nx0k0U4nHmumtdBPs_zv7Oa14b0",
    authDomain: "story-8646e.firebaseapp.com",
    databaseURL: "https://story-8646e.firebaseio.com",
    projectId: "story-8646e",
    storageBucket: "story-8646e.appspot.com",
    messagingSenderId: "297486187667",
    appId: "1:297486187667:web:fb96c89deff3e1fdcfe166"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();