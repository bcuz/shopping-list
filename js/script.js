$(function() {
  $(".item").val("")


  $(".btn").click(function() {
    if ($(".item").val().length === 0 ) {
      alert("Enter something yo")
    } else {
      $(".list").append('<div><input type="checkbox" value="hi">' + $(".item").val() + '</input><a href="#">Delete</a><br></div>')

    }

    $(".item").val("")

  });

  $(".list").on("click", "a", function() {
    $(this).parent().remove()
  })



});