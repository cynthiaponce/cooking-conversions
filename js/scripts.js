// Back End
var gallonToLiter = function(gallon) {
    return gallon * 3.785;
};

var cupsToOunces = function(cups) {
  return cups * 8;
};



// Front End
$(document).ready(function(){
  $("form.gallonToLiter").submit(function(event){
    var value1 = parseFloat($("#gallon").val());
    var result = gallonToLiter(value1);
    event.preventDefault();
    $(".output").text(result);
  });
  $("form.cupsToOunces").submit(function(event){
    var value2 = parseFloat($("#cups").val());
    var result2 = cupsToOunces(value2);
    event.preventDefault();
    $(".output").text(result2);
  });
});
