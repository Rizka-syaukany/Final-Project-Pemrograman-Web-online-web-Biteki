$(document).ready(function() {
  $('#loginModal').modal('show');
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
});

var email = document.getElementById('email')
  email.oninvalid = function(e) {
    e.target.setCustomValidity("");
    if (!e.target.validity.valid) {
      if (e.target.value.length == 0) {
      e.target.setCustomValidity("Email is required.");
    } else if (e.target.value.length < 5) {
      e.target.setCustomValidity("Email not available");
    }
  }
};

var password = document.getElementById('passLogin')
  password.oninvalid = function(e) {
    e.target.setCustomValidity("");
    if (!e.target.validity.valid) {
      if (e.target.value.length == 0) {
      e.target.setCustomValidity("Password is required.");
    } else if (e.target.value.length < 5) {
      e.target.setCustomValidity("Contact name must be at least 5 characters.");
    }
  }
};


$(document).ready(function(){

  // use keyup event on email field
  $("#email").keyup(function(){
    if(validateEmail()){
      // if the email is validated
      // set input email border green
      $("#email").css("border","2px solid green");
      // and set label 
      $("#emailMsg").html("");
    }else{
      // if the email is not validated
      // set border red
      $("#email").css("border","2px solid red");
      $("#emailMsg").html("<p class='text-danger'>Email Salah</p>");
    }
    buttonState();
  });
  // use keyup event on password
  $("#passLogin").keyup(function(){
    // check
    if(validatePassword()){
      // set input password border green
      $("#passLogin").css("border","2px solid green");
      //set passMsg 
      $("#passMsg").html("");
    }else{
        // set input password border red
      $("#passLogin").css("border","2px solid red");
      //set passMsg 
      $("#passMsg").html("<p class='text-danger'>Isikan lebih dari 8 karakter</p>");
    }buttonState();
  });
});

function buttonState(){
  if(validateEmail() && validatePassword()){
    // if the both email and password are validate
    // then button should show visible
    $("#btnLogin").prop('disable', false);
  }else{
    // if both email and pasword are not validated
    // button state should hidden
    $("#btnLogin").prop('disable', 'disable');
  }
}
function validateEmail(){
  // get value of input email
  var email=$("#email").val();
  // use reular expression
   var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
   if(reg.test(email)){
     return true;
   }else{
     return false;
   }

}
function validatePassword(){
  //get input password value
  var pass=$("#passLogin").val();
  // check it s length
  if(pass.length > 7){
    return true;
  }else{
    return false;
  }

}
