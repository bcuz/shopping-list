$(function() {
  $(".item").val("")


  $(".btn").click(function() {
    if ($(".item").val().length === 0 ) {
      alert("Enter something yo")
    } else {
      $(".list").append('<input type="checkbox" value="hi">' + $(".item").val() + '</input><a href="#">Delete</a><br>')

    }

    $(".item").val("")

  });



});