
const userList = document.querySelector('#user-list');
const form = document.querySelector('#add-course-form');

//create element and render user list
function renderUser(doc){ 
    let li = document.createElement('li');
    let email = document.createElement('span');
    let coursename = document.createElement('span');
    let credithours = document.createElement('span');

   li.setAttribute('data-id', doc.id);  // takes document from renderUser(doc) and retrieves jumbled middle user ID property column field
   email.textContent = doc.data().email; // sets email to the actual text content property of the email field
   coursename.textContent = doc.data().coursename; // sets coursename to the actual text content property of the coursename field
   credithours.textContent = doc.data().credithours; // sets credithours to the actual text content property of the credithours field

   li.appendChild(email); // appends to the li 
   li.appendChild(coursename); // appends to the li
   li.appendChild(credithours); // appends to the li
   
   userList.appendChild(li); // append li to the document
}
//---------------------------------------------------------------------

/*--------------------------------------
  *********** GETTING DATA *************
  --------------------------------------*/
//GETTING DATA
db.collection('users').get().then((snapshot) => {

    snapshot.docs.forEach(doc => {
        renderUser(doc);
    })
    /*.catch((error) => {
        // Firebase will use this to alert of its errors
        var error_code = error.code
        var error_message = error.message
    
        alert(error_message)
    }) */
})
//---------------------------------------------------------------------

/*--------------------------------------
  *********** SAVING DATA *************
  --------------------------------------*/
form.addEventListener('submit', (e) => {   //event name e, can be named whatever
    e.preventDefault(); //stops auto-refresh of form during input phase
    db.collection('users').add({
        coursename: form.coursename.value,
        credithours: form.credithours.value
    });
    form.coursename.value = '';
    form.credithours.value = '';
})

/*function addNewData(){
//form.addEventListener('submit', (e) => {   //event name e, can be named whatever
  //  e.preventDefault(); 
    courseName=document.getElementsByName('courseName')[0].value;
    termLength=document.getElementsByName('termLength')[0].value;
    auth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.    
        db.collection('users').doc(user.uid).add({
          courseName: courseName,
          termLength: termLength
      
        }).catch((error) => {
          // Firebase will use this to alert of its errors
          var error_message = error.message
      
          alert(error_message)
        })
      }
      else{
        window.location.href = "index.html"
      }
    });
   
  } //)*/