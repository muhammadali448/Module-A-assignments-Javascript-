console.log('connected');

// Authentication part logut functionality

logout.addEventListener('click', () => {
  firebase.auth().signOut().then(window.location.replace('https://todo-application-5890c.firebaseapp.com'));
});

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    logout.textContent = 'Logout ' + firebaseUser.email;
    logout.setAttribute('style', 'visibility: visible;');
    console.log(firebaseUser);
  } else {
    console.log('not logged in');
  }
});


// ==============================================

const database = firebase.database();
// const refer = database.ref('todoList');
const selectUl = document.getElementById('toDoList');
const addBtn = document.getElementById('addBtn');
const itemValue = document.getElementById('itemText');
const infoAlert = document.getElementById('alert');

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    const userId = firebaseUser.uid;
    const refer = database.ref(userId + '/todoList')
    refer.on('value', gotData, gotError);
  }
});




function gotData(snap) {
  let itemsLi = document.querySelectorAll('.storedItem');
  for (let i = 0; i < itemsLi.length; i++) {
    itemsLi[i].remove();
  }
  let todoItems = snap.val();
  let storeKeys = Object.keys(todoItems);
  for (var i = 0; i < storeKeys.length; i++) {
    let key = storeKeys[i];
    let itemDet = todoItems[key].itemDetail;
    let createLi = document.createElement('li');
    createLi.setAttribute('class', 'list-group-item list-group-item storedItem');
    createLi.setAttribute('style', 'border-radius: 15px; font-size: 1.3em;');
    let createSpan = document.createElement('span');
    let createSpan2 = document.createElement('span');
    let createSpan3 = document.createElement('span');
    createSpan.setAttribute('class', 'glyphicon glyphicon-trash pull-right');
    createSpan.setAttribute('onclick', 'deleteTodo(this);');
    createSpan.setAttribute('id', key);
    createSpan2.setAttribute('class', 'glyphicon glyphicon-edit pull-right');
    createSpan2.setAttribute('onclick', 'editTodoShow(this);');
    createSpan2.setAttribute('id', key);
    createSpan3.setAttribute('class', 'glyphicon glyphicon-pencil pull-right');
    createSpan3.setAttribute('style', 'visibility: hidden;');
    createSpan3.setAttribute('onclick', 'editItem(this);');
    createSpan3.setAttribute('id', key);
    let createLiText = document.createTextNode(itemDet);
    createLi.appendChild(createSpan);
    createLi.appendChild(createSpan2);
    createLi.appendChild(createSpan3);
    createLi.appendChild(createLiText);
    selectUl.appendChild(createLi);
    itemValue.value = "";
  }
}
function gotError(err) {
  console.log(`Error: ${err}`);
}




addItem = () => {
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      const userId = firebaseUser.uid;
      const refer = database.ref(userId + '/todoList');
      if (itemValue.value !== "" && itemValue.value !== undefined) {
        infoAlert.setAttribute('style', 'display: none;');
        let storeKey = refer.push();
        storeKey.set({
          itemDetail: itemValue.value
        });
      } else {
        infoAlert.setAttribute('style', 'visibility: visible; margin-top: 1.5%;');
        setTimeout(function () {
          infoAlert.setAttribute('style', 'display: none;')
        }, 4000);
      }
    }
  })

}



function deleteTodo(item) {
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      const userId = firebaseUser.uid;
      let itemId = item.id;
      console.log(itemId);
      let deletedRef = firebase.database().ref().child(userId + '/todoList/' + itemId);
      console.log(deletedRef);
      // selectUl.removeChild(itemId);
      deletedRef.remove();
    }
  });
}

function editTodoShow(item) {
  // itemValue.value = item.textContent;
  let itemId = item.id;
  // console.log(itemId.parentElement);
  itemValue.value = document.getElementById(itemId).parentElement.textContent;
  document.getElementById(itemId).setAttribute('style', 'display: none;');
  document.getElementById(itemId).nextSibling.setAttribute('style', 'display: none;');
  document.getElementById(itemId).nextSibling.nextSibling.setAttribute('style', 'visibility: visible;');
  addBtn.setAttribute('style', 'visibility: hidden;');
}

function editItem(item) {
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      const userId = firebaseUser.uid;
      let itemId = item.id;
      let updateItemRefer = firebase.database().ref().child(userId + '/todoList/' + itemId);
      updateItemRefer.set({ itemDetail: itemValue.value });
      addBtn.setAttribute('style', 'visibility: visible;');
    }
  });
}

