// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".devour").on("click", function (event) {

    console.log("Clicked Devour");

    var id = $(this).data("id");
    // var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/cupcakes/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
        console.log("Changed devour to", newDevourState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete").on("click", function (event) {

    console.log("Clicked Delete");

    var id = $(this).data("id");
    // var newDevour = $(this).data("newdevour");

    // var newState = {
    //   deleted: true
    // };

    // Send the PUT request.
    $.ajax("/api/cupcakes/" + id, {
      type: "DELETE",
      data: newState
    }).then(
      function () {
        // console.log("Changed to", newState);
        // // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newCupcake = {
      name: $("#ca").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/cupcakes", {
      type: "POST",
      data: newCupcake
    }).then(
      function () {
        console.log("created new cupcake");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
