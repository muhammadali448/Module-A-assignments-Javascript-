console.log('Connected');
// Initialize Firebase





  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCHiUagkEqOly5jZPzlK1ntpK711R3U8Mw",
    authDomain: "todoexample-619b7.firebaseapp.com",
    databaseURL: "https://todoexample-619b7.firebaseio.com",
    projectId: "todoexample-619b7",
    storageBucket: "",
    messagingSenderId: "406170118253"
  };
  firebase.initializeApp(config);


// getting all info 
const email = document.getElementById('email');
const password = document.getElementById('password');
// const email = document.getElementById('semail').value;
// const password = document.getElementById('spassword').value;
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const logout = document.getElementById('logout');

loginBtn.addEventListener('click', e => {
  const emailValue = email.value;
  const passwordValue = password.value;
  const auth = firebase.auth();
  const promise = auth.signInWithEmailAndPassword(emailValue, passwordValue);
  promise.catch(e => alert(e.message));
});

signupBtn.addEventListener('click', e => {
  const emailValue = email.value;
  const passwordValue = password.value;
  const auth = firebase.auth();
  const promise = auth.createUserWithEmailAndPassword(emailValue, passwordValue);
  promise.catch(e => console(e.message));
});

logout.addEventListener('click', () => {
  firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    logout.textContent = 'Logut ' + firebaseUser.email;
    logout.setAttribute('style', 'visibility: visible;');
    console.log(firebaseUser);
  }else {
    console.log('not logged in');
  }
});



