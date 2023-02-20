// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyACtLJPVmbrm-VTam80pmNC6ev_C9mVTiA",
    authDomain: "testing-320ed.firebaseapp.com",
    projectId: "testing-320ed",
    storageBucket: "testing-320ed.appspot.com",
    messagingSenderId: "759480422005",
    appId: "1:759480422005:web:ed1e51cd3d09550041b23c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth()
  const database = firebase.database()
  const db = firebase.firestore()
  
  // Below is for dashboard functionality
  
  function yesnoCheck() {
      if (document.getElementById('customRadio3').checked) {
          document.getElementById('ifYes').style.display = 'block';
      }
      if (document.getElementById('customRadio2').checked) {
        document.getElementById('ifYes').style.display = 'none';
      }
      if (document.getElementById('customRadio1').checked) {
      document.getElementById('ifYes').style.display = 'none';
      }
  }
  
  function GradeCategory() {
    //Exam
    if (document.getElementById('Exam').checked) {
      document.getElementById('CategoryYesExam').style.display = 'block';
      document.getElementById('CategoryYesExam2').style.display = 'block';
    }
    if (document.getElementById('Exam').checked === false) {
      document.getElementById('CategoryYesExam').style.display = 'none';
      document.getElementById('CategoryYesExam2').style.display = 'none';
    }
    //Final
    if (document.getElementById('Final').checked) {
        document.getElementById('CategoryYesFinal').style.display = 'block';
        document.getElementById('CategoryYesFinal2').style.display = 'block';
    }
    if (document.getElementById('Final').checked === false) {
      document.getElementById('CategoryYesFinal').style.display = 'none';
      document.getElementById('CategoryYesFinal2').style.display = 'none';
    }
    //Midterm
    if (document.getElementById('Midterm').checked) {
      document.getElementById('CategoryYesMidterm').style.display = 'block';
      document.getElementById('CategoryYesMidterm2').style.display = 'block';
    }
    if (document.getElementById('Midterm').checked === false) {
      document.getElementById('CategoryYesMidterm').style.display = 'none';
      document.getElementById('CategoryYesMidterm2').style.display = 'none';
    }
    //Quiz
    if (document.getElementById('Quiz').checked) {
      document.getElementById('CategoryYesQuiz').style.display = 'block';
      document.getElementById('CategoryYesQuiz2').style.display = 'block';
    }
    if (document.getElementById('Quiz').checked === false) {
      document.getElementById('CategoryYesQuiz').style.display = 'none';
      document.getElementById('CategoryYesQuiz2').style.display = 'none';
    }
    //HW
    if (document.getElementById('HW').checked) {
      document.getElementById('CategoryYesHW').style.display = 'block';
      document.getElementById('CategoryYesHW2').style.display = 'block';
    }
    if (document.getElementById('HW').checked === false) {
      document.getElementById('CategoryYesHW').style.display = 'none';
      document.getElementById('CategoryYesHW2').style.display = 'none';
    }
    
    //Discussion
    if (document.getElementById('Discussion').checked) {
      document.getElementById('CategoryYesDiscussion').style.display = 'block';
      document.getElementById('CategoryYesDiscussion2').style.display = 'block';
    }
    if (document.getElementById('Discussion').checked === false) {
      document.getElementById('CategoryYesDiscussion').style.display = 'none';
      document.getElementById('CategoryYesDiscussion2').style.display = 'none';
    }
  
    //Project
    if (document.getElementById('Project').checked) {
      document.getElementById('CategoryYesProject').style.display = 'block';
      document.getElementById('CategoryYesProject2').style.display = 'block';
    }
    if (document.getElementById('Project').checked === false) {
      document.getElementById('CategoryYesProject').style.display = 'none';
      document.getElementById('CategoryYesProject2').style.display = 'none';
    }
  
    //Participation
    if (document.getElementById('Participation').checked) {
      document.getElementById('CategoryYesParticipation').style.display = 'block';
      document.getElementById('CategoryYesParticipation2').style.display = 'block';
    }
    if (document.getElementById('Participation').checked === false) {
      document.getElementById('CategoryYesParticipation').style.display = 'none';
      document.getElementById('CategoryYesParticipation2').style.display = 'none';
    }
  }
  
    // Check if remote is CHECKED than rest of the days must be UNCHECKED
  function classDayCheck() {
    if (document.getElementById("day-7").checked === true){
      document.getElementById("day-0").checked = false;
      document.getElementById("day-1").checked = false;
      document.getElementById("day-2").checked = false;
      document.getElementById("day-3").checked = false;
      document.getElementById("day-4").checked = false;
      document.getElementById("day-5").checked = false;
      document.getElementById("day-6").checked = false;
    }
    if (document.getElementById("day-0").checked === true){
      document.getElementById("day-7").checked = false;
    }
    if (document.getElementById("day-1").checked === true){
      document.getElementById("day-7").checked = false;
    }
    if (document.getElementById("day-2").checked === true){
      document.getElementById("day-7").checked = false;
    }
    if (document.getElementById("day-3").checked === true){
      document.getElementById("day-7").checked = false;
    }
    if (document.getElementById("day-4").checked === true){
      document.getElementById("day-7").checked = false;
    }
    if (document.getElementById("day-5").checked === true){
      document.getElementById("day-7").checked = false;
    }
    if (document.getElementById("day-6").checked === true){
      document.getElementById("day-7").checked = false;
    }
  }
