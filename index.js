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

const form = document.getElementById('submit-btn');

let formEmail = document.getElementById('user-email');
let formName = document.getElementById('user-name');
let formSubject = document.getElementById('user-subject');
let formMessage = document.getElementById('user-message');

const invalidEmailField = document.getElementById("user-email-check");
const invalidNameField = document.getElementById("user-name-check");
const invalidSubjectField = document.getElementById("user-subject-check");
const invalidMessageField = document.getElementById("user-message-check");

let validInputs;

form.addEventListener("click", (e) => {

  validInputs = 0;

  //Name check

  let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

  if (!regName.test(formName.value)) {
    invalidNameField.innerText = "Invalid name";

  } else {
    invalidNameField.innerText = "";
    validInputs++;
  }

  //Email Check

  if (formEmail.value === '' || formEmail.value == null) {
    invalidEmailField.innerText = "Please enter your email.";

  } else if (formEmail.value.length < 6) {
    invalidEmailField.innerText = "Email must be longer than 6 characters.";

  } else if (formEmail.value.length > 40) {
    invalidEmailField.innerText = "Email can't be that large.";

  } else if (formEmail.value.split("@").length - 1 > 1) {
    invalidEmailField.innerText = "Email can only include one '@' character.";

  } else if (formEmail.value.split("@").length - 1 === 0) {
    invalidEmailField.innerText = "Email must include one '@' character.";

  } else if (!formEmail.value.includes(".")) {
    invalidEmailField.innerText = "Email must include at least one '.' character.";

  } else if (formEmail.value.includes("..")) {
    invalidEmailField.innerText = "Email can't include 2 or more '.' characters in a row.";

  } else if (!formEmail.validity.valid) {
    invalidEmailField.innerText = "Email is invalid.";

  } else {
    validInputs++;
    invalidEmailField.innerText = "";
  }

  //Subject check

  if (formSubject.value === '' || formSubject.value == null) {
    invalidSubjectField.innerText = "Please enter the subject.";

  } else if (formSubject.value.length < 5) {
    invalidSubjectField.innerText = "Subject must be longer than 5 characters.";

  } else {
    validInputs++;
    invalidSubjectField.innerText = "";
  }

  //Message body check

  if (formMessage.value === '' || formMessage.value == null) {
    invalidMessageField.innerText = "Please include the message.";

  } else if (formMessage.value.length < 10) {
    invalidMessageField.innerText = "Message must be longer than 10 characters.";

  } else {
    validInputs++;
    invalidMessageField.innerText = "";
  }

  console.log(validInputs);
  if (validInputs < 4) {
    e.preventDefault();
  }
  //$("body").addClass("newsletter-success");
})
