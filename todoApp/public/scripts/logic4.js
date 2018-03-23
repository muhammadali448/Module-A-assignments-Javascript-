console.log('connected');

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
  promise.then(e => window.location.replace('https://todo-application-5890c.firebaseapp.com/todo.html'))
  promise.catch(e => alert(e.message));
});
// dlnalkdnlkadna


signupBtn.addEventListener('click', e => {
  const emailValue = email.value;
  const passwordValue = password.value;
  const auth = firebase.auth();
  const promise = auth.createUserWithEmailAndPassword(emailValue, passwordValue);
  promise.then(e => window.location.replace('https://todo-application-5890c.firebaseapp.com/todo.html'));
  promise.catch(e => alert(e.message));
});




// ======================================================================================
