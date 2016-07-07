$(function() {
  $(".item").val("")


  $(".btn").click(function() {
    if ($(".item").val().length === 0 ) {
      alert("Enter something yo")
    } else {
      $(".shopping-list").append('\
        <div>\
          <input type="checkbox">\
          <label contenteditable="true">' + $(".item").val() + '</label>\
          <a href="#">Delete</a><br>\
        </div>')
    }

    $(".item").val("")

  });

  $(".shopping-list").on("click", "a", function() {
    $(this).parent().remove()
  })
  .on("click", "input[type='checkbox']", function() {
  if($(this).is(":checked")) {
    $(this).next().css("text-decoration", "line-through")
  } else {
    $(this).next().css("text-decoration", "none")
  }
  })
});