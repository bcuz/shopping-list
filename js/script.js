$(function() {

  // prefer not to have to do this two times
  $(".btn").click(function() {
    console.log("hi");
  });

    $('.item').keypress(function(e){
        if(e.which == 13){
            console.log("bz");
        }
    });

});