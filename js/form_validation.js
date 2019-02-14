$(document).ready(function($) {
 $("#btnRegister").on('click', (e) => {
  if (isValidate()) {
    if (validateEmail($('#email_address').val()) && telephoneCheck($('#phone_number').val())) {
      $('#email_address, #phone_number').removeClass("emptyField");
    } else {
      $('#email_address, #phone_number').addClass("emptyField");
      return;
    } 
    alert("Registration Successfully")
  }else {
    alert("All fields are mandatory");
  }
}); 
 function isValidate() {
  var isValid = true;     
  const allFields = ["#full_name", "#email_address", "#phone_number"];
  for (let field of allFields) {
    if ($(field).val().trim().length == 0) {
      $(field).addClass('emptyField');
      $(field).on('input', () => {
        $(field).removeClass('emptyField');
      });
      isValid = false;
    }
  }
  return isValid;
}
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function telephoneCheck(phone) {
  var isphone = /^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g.test(phone);
  console.log(isphone);
  return isphone;
}
});