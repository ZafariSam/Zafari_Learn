
// Your web app's Firebase configuration
  var firebaseConfig = {
    authDomain: "sz-zocial.firebaseapp.com",
    databaseURL: "https://sz-zocial.firebaseio.com",
    projectId: "sz-zocial",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

function subject() {
  var sub = ['maths', 'english', 'science', 'geography', 'history'];
  var arrLen = sub.length;
  var arrVal = 0;
  document.getElementById('subject-span').innerHTML = sub[0];
  setInterval(() => {
    arrVal ++;
    document.getElementById('subject-span').innerHTML = sub[arrVal % arrLen];
    //console.log('Interval')
  }, 1000);
};

window.addEventListener("resize", function(){
  let w = document.documentElement.clientWidth;
});

document.getElementById('sub-btn').addEventListener('click', () => {
  let x = document.forms["contact"];
  let name = x["fname"].value;
  let org = x["org"].value;
  let email = x["email"].value;
  let question = x["q"].value;
    if(name && org && email ) {
      db.collection("learnReg").add({
      name: name,
      org: org,
      email: email,
      question: question
      })
      .then(function() {
          console.log("Document successfully written!");
          snackCall();
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
      //console.log(`Name: ${name}, Org: ${org}, Email: ${email}, Question: ${question}`)
    }
    else {}
});

function clearFields(){
  document.getElementById('n').value = '';
  document.getElementById('o').value = '';
  document.getElementById('e').value = '';
  document.getElementById('q').value = '';
  return false;
}

function snackCall(){
  document.getElementById('snack').style.opacity = 1;
  setTimeout(() => {
    document.getElementById('snack').style.opacity = 0;
    }, 5000)
}
