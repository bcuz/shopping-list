$(function() {
  $(".item").val("")


  $(".btn").click(function() {
    if ($(".item").val().length === 0 ) {
      alert("Enter something yo")
    } else {
      $(".list").append('<div><input type="checkbox" value="hi"><label>' + $(".item").val() + '</label></input><a href="#">Delete</a><br></div>')

    }

    $(".item").val("")

  });

  $(".list").on("click", "a", function() {
    $(this).parent().remove()
  }).on("click", "input[type='checkbox']", function() {
  if($(this).is(":checked")) {
    $(this).next().css("text-decoration", "line-through")
  } else {
    $(this).next().css("text-decoration", "none")
  }


  })




});