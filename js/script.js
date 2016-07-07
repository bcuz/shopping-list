$(function() {
  $("input[type='text']").val("")

  $(".btn").click(function() {
    if ($("input[type='text']").val().length === 0 ) {
      alert("Enter something yo")
    } else {
      $(".shopping-list").append('\
        <div>\
          <input type="checkbox">\
          <label contenteditable="true">' + $("input[type='text']").val() + '</label>\
          <a href="#">Delete</a><br>\
        </div>')
    }

    $("input[type='text']").val("")

  });

  $("input[type='text']").keyup(function(event){
    if(event.keyCode == 13){
        $(".btn").click();
    }
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