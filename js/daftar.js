$(document).ready(function(){
    $('[data-toogle="tooltip"]').tooltip();
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