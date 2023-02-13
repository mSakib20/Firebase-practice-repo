// Set up our register function
function register() {
  // Get all our input fields
  email = document.getElementsByName('email')[0].value
  password = document.getElementsByName('password')[0].value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Bad email or Password')
    return
    // Don't continue running the code
  }
 
  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    alert(userCredential.user)
    alert('User Created!!')
  })
  .catch((error) => {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}






// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

