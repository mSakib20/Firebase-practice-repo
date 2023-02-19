function addNewData(){
//form.addEventListener('submit', (e) => {   //event name e, can be named whatever
  //  e.preventDefault(); 
    courseName=document.getElementsByName('courseName')[0].value;
    termLength=document.getElementsByName('termLength')[0].value;
    auth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.      
        alert(user.uid)
        alert(courseName)
        alert(termLength)  
        db.collection('users').doc(user.uid).update({
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
   
  } //)