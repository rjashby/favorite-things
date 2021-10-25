$(document).ready(function() {
  $("#mainForm").submit(function(event) {
    event.preventDefault();    
    let anArray = [];
    anArray.push($("input#thing1").val());
    anArray.push($("input#thing2").val());
    anArray.push($("input#thing3").val());

    $(".thing1").text(anArray[0]);
    $(".thing2").text(anArray[1]);
    $(".thing3").text(anArray[2]);
    $("#display").show();
  });
});