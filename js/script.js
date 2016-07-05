$(function() {

  $(".btn").click(function() {
    console.log("hi");
  });

    $('.item').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            console.log("bz");
        }
    });

});