$(function() {
  var item_added = $("input[type='text']");

  item_added.val("");

  $("form").submit(function() {
    if (item_added.val().length === 0 ) {
      alert("Enter something yo");
    } else {
      $(".shopping-list").append('\
        <div>\
          <input type="checkbox">\
          <label contenteditable="true">' + item_added.val() + '</label>\
          <a href="#">Delete</a><br>\
        </div>');
    }

    item_added.val("");
    return false;

  });

  $(".shopping-list").on("click", "a", function() {
    $(this).parent().remove();
  })
  .on("click", "input[type='checkbox']", function() {
  if($(this).is(":checked")) {
    $(this).next().css("text-decoration", "line-through");
  } else {
    $(this).next().css("text-decoration", "none");
  }
  });
});