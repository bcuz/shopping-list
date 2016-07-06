$(function() {

  $(".btn").click(function() {

    $(".list").append('<input type="checkbox" value="hi">' + $(".item").val() + '</input><br>')
  });



});