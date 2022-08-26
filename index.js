//Default menu when user visits the page
$(".food-card").addClass("hide-menu");
$(".appetizers").addClass("show-menu");
$("#appetizer-btn").addClass("chosen-menu");
//

//email input check (newletter form)

function showMenu(x, btnId) {

  $(".food-card").removeClass("show-menu");

  document.querySelectorAll(".menu-btn").forEach((btn) => {
    $("#" + btn.id).removeClass("chosen-menu");
  });

  switch (x) {

    case 1:
      $(".appetizers").addClass("show-menu");
      $("#" + btnId).addClass("chosen-menu");
      break;

    case 2:
      $(".salads").addClass("show-menu");
      $("#" + btnId).addClass("chosen-menu");
      break;

    case 3:
      $(".pizza").addClass("show-menu");
      $("#" + btnId).addClass("chosen-menu");
      break;

    case 4:
      $(".spaghetti").addClass("show-menu");
      $("#" + btnId).addClass("chosen-menu");
      console.log("#" + btnId);
      break;

    case 5:
      $(".desserts").addClass("show-menu");
      $("#" + btnId).addClass("chosen-menu");
      console.log("#" + btnId);
      break;

    default:
      console.log("Error");
  }
}


let email = document.getElementById('email-input');
const form = document.getElementById('newsletter-form');
const errorElement = document.getElementById("email-error-field");
const successElement = document.getElementById("email-success-field");

form.addEventListener("click", (e) => {

  if (email.value === '' || email.value == null) {
    errorElement.innerText = "Please enter your email.";
    successElement.innerText = "";
    e.preventDefault();

  } else if (email.value.length < 6) {
    errorElement.innerText = "Email must be longer than 6 characters.";
    successElement.innerText = "";
    e.preventDefault();

  } else if (email.value.length > 40) {
    errorElement.innerText = "Email can't be that large.";
    successElement.innerText = "";
    e.preventDefault();

  } else if (email.value.split("@").length - 1 > 1) {
    errorElement.innerText = "Email can only include one @";
    successElement.innerText = "";
    e.preventDefault();

  } else if (email.value.split("@").length - 1 === 0) {
    errorElement.innerText = "Email must include one @";
    successElement.innerText = "";
    e.preventDefault();

  } else {
    errorElement.innerText = "";
    successElement.innerText = "Valid Email! Redirecting...";
    $("body").addClass("newsletter-success");

  }

})
