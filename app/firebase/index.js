import firebase from 'firebase'

try {
  var config = {
      apiKey: "AIzaSyAGvp0g-fULKZljOK3hxomZvJJlicHV1Hw",
      authDomain: "reacttodo-73c38.firebaseapp.com",
      databaseURL: "https://reacttodo-73c38.firebaseio.com",
      storageBucket: "reacttodo-73c38.appspot.com",
      messagingSenderId: "331286074390"
  };

  firebase.initializeApp(config);

} catch (e) {
  console.log(e)
}

export var firebaseRef = firebase.database().ref()

export default firebase
