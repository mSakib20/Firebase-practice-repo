function addNewData(){
//form.addEventListener('submit', (e) => {   //event name e, can be named whatever
  //  e.preventDefault(); 
    courseName=document.getElementsByName('courseName')[0].value;
    termLength=document.getElementsByName('termLength')[0].value;
    creditHours=document.getElementsByName('creditHours')[0].value;

  // fetching DAYS

    // Create an array to store the days that are checked
    let checkedDays = [];

    // Loop through each checkbox
    for (let i = 0; i < 8; i++) {
      // Get the checkbox element by its id
      let checkbox = document.getElementById(`day-${i}`);

      // If the checkbox is checked, add its value to the checkedDays array
      if (checkbox.checked) {
        checkedDays.push(checkbox.value);
      }
    }
    
    auth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.      
        alert(user.uid)
        alert(courseName)
        alert(termLength)  

        db.collection('users').doc(user.uid).collection('classes').doc(courseName).set({
          courseName: courseName,
          termLength: termLength,
          creditHours: creditHours,
          classDays: checkedDays
      
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

  //db.collection('users').doc(res.user.uid).collection('classes').update
 // db.collection('users').doc(user.uid).update({
// db.collection('users').doc(res.user.uid).collection('classes').doc(courseName).set({