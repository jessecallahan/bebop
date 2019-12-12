$(document).ready(function() {
  $("button").click(function(event) {

  event.preventDefault();


    var theInput = parseInt($("input#enter").val());

    // $(".output").append(theInput);

    if (theInput % 15 === 0) {
      $(".output").append("pingpong");
    } else if(theInput % 5 === 0){
      $(".output").append("pong");
    } else if (theInput % 3 === 0){
      $(".output").append("ping")
    }
    else {
      $(".output").append(theInput)
    }



});
});
