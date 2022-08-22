
$(".food-card").addClass("hide-menu");
$(".appetizers").addClass("show-menu");
$("#appetizer-btn").addClass("chosen-menu");

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

//spaghetti
//desserts
