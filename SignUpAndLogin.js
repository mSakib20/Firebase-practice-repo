
const register = () => {
  const email = document.getElementsByName('email').value
  const password = document.getElementsByName('password').value

  console.log(email, password)
  expression = 	/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (expression.test(email) == true && password > 6) {
    auth.createUserWithEmailAndPassword(email,password)
    .then((res) => {
      console.log(res.email)
  
    })
    .catch((err) => {
      alert(err.message)

    })
  }
  
  else {
    if (expression.test(email) == false){
      alert("wrong email")
    }
    if (password <= 6){
      alert("bad password")
    }
  } 
     
}